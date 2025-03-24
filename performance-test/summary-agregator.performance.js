import http from 'k6/http';
import { check, sleep } from 'k6';
// import { initContractPlugin } from 'https://jslib.k6.io/k6chaijs-contracts/4.3.4.0/index.js';
import { describe } from 'https://jslib.k6.io/k6chaijs/4.3.4.1/index.js'

export const options = {
    discardresBodies: true,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: 100,
        iterations: 1,
        maxDuration: '5m',
      },
    },
  };

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export default function () {

    // let randomNumber = getRandomNumber(10, 29);
    let randomNumber = 28;
    console.log('Random Num: ', randomNumber);
    
    describe('Summary Agregator', () => {
        let url = 'http://evermpe-api.dev.internal/v1/orders/summary/aggregator';
        let params = {
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        },
    };

    let payload = JSON.stringify({
        "brandId": "",
        "dateFromStr": "2024-05-01T00:00:00.000Z",
        "dateToStr": `2024-05-${randomNumber}T00:00:00.000Z`,
        "marketplaces": "shopee"
    });

    let res = http.post(url, payload, params);

    if(res.status!=200){
        console.log(JSON.stringify(res))
        console.log("----- res BODY ----")
        console.log(JSON.stringify(res.body))
      }

    check(res, {
        'is status 200': (r) => r.status === 200,
    });    
    // sleep(10)
    }) &&
    
    describe('Summary Agregator', () => {
        let url = 'http://evermpe-api.dev.internal/v1/orders/summary/aggregator';
        let params = {
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        },
    };

    let payload = JSON.stringify({
        "brandId": "",
        "dateFromStr": "2024-05-01T00:00:00.000Z",
        "dateToStr": `2024-05-${randomNumber}T00:00:00.000Z`,
        "marketplaces": "lazada"
    });

    let res = http.post(url, payload, params);

    if(res.status!=200){
        console.log(JSON.stringify(res))
        console.log("----- res BODY ----")
        console.log(JSON.stringify(res.body))
      }

    check(res, {
        'is status 200': (r) => r.status === 200,
    });    
    // sleep(10)
    }) &&

    describe('Summary Agregator', () => {
        let url = 'http://evermpe-api.dev.internal/v1/orders/summary/aggregator';
        let params = {
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        },
    };

    let payload = JSON.stringify({
        "brandId": "",
        "dateFromStr": "2024-05-01T00:00:00.000Z",
        "dateToStr": `2024-05-${randomNumber}T00:00:00.000Z`,
        "marketplaces": "tokopedia"
    });

    let res = http.post(url, payload, params);

    if(res.status!=200){
        console.log(JSON.stringify(res))
        console.log("----- res BODY ----")
        console.log(JSON.stringify(res.body))
      }

    check(res, {
        'is status 200': (r) => r.status === 200,
    });  
    // sleep(10)  
    })
    
}