import http from 'k6/http';
import { sleep } from 'k6';
import { parse } from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import { initContractPlugin } from 'https://jslib.k6.io/k6chaijs-contracts/4.3.4.0/index.js';
import { describe, chai, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.1/index.js';
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js'
import { SharedArray } from 'k6/data'

const awbData = new SharedArray('awbData', function() {
    return papaparse.parse(open('./AWB_DATA.csv'), {header: true}).data
  })

function codeactived(id, status) {
    const url = 'http://evm-gss.dev.internal/v2/productDiscovery/sync';

    const headers = {
        'Content-Type': 'application/json',
    };

    const payload = {
        action: 'update',
        data: [
            {
                "id": id,
                "isActive": status,
            }
        ],
        schema: 'evm',
        direct: true,
        table: 'product_model',
    };

    return http.post(url, JSON.stringify(payload), { headers });
}

export default function () {

    for (let i = 0; i < awbData.length; i++) {
        const data = awbData[i];
        let id = parseInt(data.id);
        let status = parseInt(data.status);
        
        
        describe('Success Update', () => {
            
    
            const response = codeactived(id, status);
            console.log(response)
            
            expect(response.status, 'status').to.equal(200)
            
        })
        
    }
}
