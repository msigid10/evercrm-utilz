import { initContractPlugin } from 'https://jslib.k6.io/k6chaijs-contracts/4.3.4.0/index.js';
import { describe, chai } from 'https://jslib.k6.io/k6chaijs/4.3.4.1/index.js'
import { step_everwhatsapp } from '../../../step/everwhatsapp/everwhatsapp.step.js';
import { assert } from '../../../utils/assert.js';
import { SEND_MESSAGE_DATA } from '../../../data/everwhatsapp/message/send-message.data.js';
import { utils } from '../../../utils/utils.js';


initContractPlugin(chai)

export const options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'per-vu-iterations',
      vus: 1,
      iterations: 2000,
      maxDuration: '10m',
    },
  },
};

export default function() {
  describe('Send Message: Success', () => { 

    const expectedResCode = 200
    const expect = assert.expect
    const consoleLogError = utils.error.consoleResponseData
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMDAwMjg0NDQwNiwicm9sZUlkIjoxLCJyb2xlTmFtZSI6ImFkbWluIiwidGVhbUlkIjpudWxsLCJ0ZWFtTWVtYmVyc2hpcElkIjpudWxsLCJtZXJjaGFudENvZGUiOiJldmVycHJvIiwiaXNzIjoiRXZlckNSTSIsImV4cCI6MTY5ODk5MjYzNiwiaWF0IjoxNjk4NzMzNDM2fQ.YF6RRJI3ZrzGslWQ4TLV20zBzPqS4blmE4Qow5hKgq8'
    // const deviceKey = 'Rb4nv_rVg'
    const deviceKey1 = 'FDpevMMSR'
    // const deviceKey2 = 'rXd3qIWIg'
    // const deviceKey3 = 'IyXSyFmSR'
    // const deviceKey4 = 'u4uL6NiSg'
    // const deviceKey5 = 'mCDzXBkSg'

    // const response = step_everwhatsapp.message.sendMessage(accessToken, SEND_MESSAGE_DATA.content, SEND_MESSAGE_DATA.contentImageURL, deviceKey, SEND_MESSAGE_DATA.destinationNumber)
    // const response = step_everwhatsapp.message.sendMessage(accessToken, SEND_MESSAGE_DATA.content, SEND_MESSAGE_DATA.contentImageURL, deviceKey, SEND_MESSAGE_DATA.destinationNumber)
    
    //tanpa image
    const response1 = step_everwhatsapp.message.sendMessage(accessToken, SEND_MESSAGE_DATA.content, SEND_MESSAGE_DATA.contentImageURL, deviceKey1, SEND_MESSAGE_DATA.destinationNumber)
    // const response2 = step_everwhatsapp.message.sendMessage(accessToken, SEND_MESSAGE_DATA.content, deviceKey2, SEND_MESSAGE_DATA.destinationNumber2)
    // const response3 = step_everwhatsapp.message.sendMessage(accessToken, SEND_MESSAGE_DATA.content, deviceKey3, SEND_MESSAGE_DATA.destinationNumber3)
    // const response4 = step_everwhatsapp.message.sendMessage(accessToken, SEND_MESSAGE_DATA.content, deviceKey4, SEND_MESSAGE_DATA.destinationNumber)
    // const response5 = step_everwhatsapp.message.sendMessage(accessToken, SEND_MESSAGE_DATA.content, deviceKey5, SEND_MESSAGE_DATA.destinationNumber)
  
    // console.log('response: ', response1)
    consoleLogError(response1, expectedResCode)
    // consoleLogError(response2, expectedResCode)
    // consoleLogError(response3, expectedResCode)
    // consoleLogError(response5, expectedResCode)
    // consoleLogError(response2, expectedResCode)

    //assertion 
    expect.statusCode(response1, expectedResCode)
    // expect.statusCode(response2, expectedResCode)
    // expect.statusCode(response3, expectedResCode)
    // expect.statusCode(response4, expectedResCode)
    // expect.statusCode(response5, expectedResCode)
    
  })
}