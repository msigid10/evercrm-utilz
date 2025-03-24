import { describe } from 'https://jslib.k6.io/k6chaijs/4.3.4.1/index.js';
import { utils } from '../../../utils/utils.js';
import { step_everwhatsapp } from '../../../step/everwhatsapp/everwhatsapp.step.js';

const consoleLogError = utils.error.consoleResponseData

export const options = {
//   discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'per-vu-iterations',
      vus: 25,
      iterations: 1,
      maxDuration: '5m',
    },
  },
};

export default function(){
  describe('Sync Customer Contact: Success A', () => {
    //akun baru
    // const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMDAwMjg3Njc3Niwicm9sZUlkIjoyLCJyb2xlTmFtZSI6ImltZXJzIiwidGVhbUlkIjpudWxsLCJ0ZWFtTWVtYmVyc2hpcElkIjpudWxsLCJtZXJjaGFudENvZGUiOiJldmVycHJvIiwiaXNzIjoiRXZlckNSTSIsImV4cCI6MTcwMDI4MTE1MCwiaWF0IjoxNzAwMDIxOTUwfQ.T8wGYR-Dkd5AVtarUMNeCn6LXtxB-wzYysUEBFm6lRw"
    // const deviceKey = "CbFaKFSIR"

    //akun lama
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMDAwMjg0NDQwNiwicm9sZUlkIjoxLCJyb2xlTmFtZSI6ImFkbWluIiwidGVhbUlkIjpudWxsLCJ0ZWFtTWVtYmVyc2hpcElkIjpudWxsLCJtZXJjaGFudENvZGUiOiJldmVycHJvIiwiaXNzIjoiRXZlckNSTSIsImV4cCI6MTcwMDA1MzkzOSwiaWF0IjoxNjk5Nzk0NzM5fQ.3mNYUqqK4ezfh0OVpjH1GxLxNzNbz3FgFo3loxNSCiE"
    const deviceKey = "vLgxw3iIR"

    const expectedResCode = 200

    const response = step_everwhatsapp.customerContact.sync(accessToken, deviceKey)
    // console.log('Response Body: ', response.body)
    // console.log('Response Req: ', response.request)

    consoleLogError(response, expectedResCode)
    console.log('SYNC ID A: ',response.json().data.syncId)
  })

  describe('Sync Customer Contact: Success B', () => {

    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMDAwMjg0NDQwNiwicm9sZUlkIjoxLCJyb2xlTmFtZSI6ImFkbWluIiwidGVhbUlkIjpudWxsLCJ0ZWFtTWVtYmVyc2hpcElkIjpudWxsLCJtZXJjaGFudENvZGUiOiJldmVycHJvIiwiaXNzIjoiRXZlckNSTSIsImV4cCI6MTcwMDIwMjU2MiwiaWF0IjoxNjk5OTQzMzYyfQ.BVPTfHJtNs5TS0u1antr2RHtT2t31SwqTql9n_-YfCY"
    const deviceKey = "FDpevMMSR"

    const expectedResCode = 200

    const response = step_everwhatsapp.customerContact.sync(accessToken, deviceKey)

    consoleLogError(response, expectedResCode)
    console.log('SYNC ID B: ',response.json().data.syncId)
  })

  //   describe('Sync Customer Contact: Success C', () => {

  //     const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMDAwMjg0NDQwNiwicm9sZUlkIjoxLCJyb2xlTmFtZSI6ImFkbWluIiwidGVhbUlkIjpudWxsLCJ0ZWFtTWVtYmVyc2hpcElkIjpudWxsLCJtZXJjaGFudENvZGUiOiJldmVycHJvIiwiaXNzIjoiRXZlckNSTSIsImV4cCI6MTcwMDIwMjU2MiwiaWF0IjoxNjk5OTQzMzYyfQ.BVPTfHJtNs5TS0u1antr2RHtT2t31SwqTql9n_-YfCY"
  //     const deviceKey = "vLgxw3iIR"

  //     const expectedResCode = 200

  //     const response = step_everwhatsapp.customerContact.sync(accessToken, deviceKey)
  //     // console.log('Response Body: ', response.body)
  //     // console.log('Response Req: ', response.request)

//     consoleLogError(response, expectedResCode)
//     console.log('SYNC ID C: ',response.json().data.syncId)
//   })
}