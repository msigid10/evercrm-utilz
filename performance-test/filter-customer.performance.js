import { describe } from 'https://jslib.k6.io/k6chaijs/4.3.4.1/index.js';

import { FILTER_DATA } from '../../../data/everwhatsapp/customer/filter.data.js';
import { utils } from '../../../utils/utils.js';
import { assert } from '../../../utils/assert.js';
import { step_everwhatsapp } from '../../../step/everwhatsapp/everwhatsapp.step.js';

const expect = assert.expect
const consoleLogError = utils.error.consoleResponseData


export const options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'per-vu-iterations',
      vus: 100,
      iterations: 1,
      maxDuration: '1m',
    },
  },
};
  
export default function(){
  describe('Filter Customer: Success', () => {
    //dev
    // const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMDAwMjg0NDQwNiwicm9sZUlkIjoxLCJyb2xlTmFtZSI6ImFkbWluIiwidGVhbUlkIjpudWxsLCJ0ZWFtTWVtYmVyc2hpcElkIjpudWxsLCJtZXJjaGFudENvZGUiOiJldmVycHJvIiwiaXNzIjoiRXZlckNSTSIsImV4cCI6MTY5Njc0MTU2NiwiaWF0IjoxNjk2NDgyMzY2fQ.ggyJOPx-Y97ULqWd0zBjg8UWRe2P-09GgcISxKcYszk"
    //prod
    // const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMDAwMjg3NTM2MSwicm9sZUlkIjoxLCJyb2xlTmFtZSI6ImFkbWluIiwidGVhbUlkIjpudWxsLCJ0ZWFtTWVtYmVyc2hpcElkIjpudWxsLCJtZXJjaGFudENvZGUiOiJldmVycHJvIiwiaXNzIjoiRXZlckNSTSIsImV4cCI6MTY5Njc0NzI0NiwiaWF0IjoxNjk2NDg4MDQ2fQ.UcrEIXrTsn2UUXl4g7l-jyjTpc4ypmO_b7kq_y3bdPk"
    // const xApiKey = "8d673e255cf6134caf2fd36e78c1012"

    const expectedResCode = 200

    const response = step_everwhatsapp.customer.filter(FILTER_DATA)
    
    consoleLogError(response, expectedResCode)

    //assertion
    expect.statusCode(response, expectedResCode)
  })
}