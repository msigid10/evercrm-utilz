import http from "k6/http";
import { describe, expect } from "https://jslib.k6.io/k6chaijs/4.3.4.1/index.js";
import { htmlReport } from 'https://raw.githubusercontent.com/depapp/k6-reporter-bootstrap/main/dist/bundle.js';

const BASE_URL = "http://evercrm.dev.internal";

export default function() {
  describe("/v1/webhook/banned", () => {

    let url = BASE_URL + `/v1/webhook/banned`;
    let body = {"bannedExpiry":0,"bannedReason":"string","jid":"string"};
    let params = {headers: {"Accept":"application/json","X-Secret-Key":"<Secret Key>"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

  });

  describe("/v1/webhook/logout", () => {

    let url = BASE_URL + `/v1/webhook/logout`;
    let body = {"jid":"string","reason":"string","reasonCode":0};
    let params = {headers: {"Accept":"application/json","X-Secret-Key":"<Secret Key>"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

  });

  describe("/v1/webhook/message-status", () => {

    let url = BASE_URL + `/v1/webhook/message-status`;
    let body = {};
    let params = {headers: {"Accept":"application/json"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

  });

  describe("/v1/webhook/whatsapp/link-device-by-phone-number", () => {

    let url = BASE_URL + `/v1/webhook/whatsapp/link-device-by-phone-number`;
    let body = {"device":{"jid":"string","registrationID":0},"message":"string","sessionID":"string","status":"string"};
    let params = {headers: {"Accept":"application/json","X-Secret-Key":"<Secret Key>"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

  });

  describe("/v1/webhook/whatsapp/message-history", () => {

    let url = BASE_URL + `/v1/webhook/whatsapp/message-history`;
    let body = {"messageConversationHistories":[],"sentAt":"string"};
    let params = {headers: {"Accept":"application/json","X-Secret-Key":"<Secret Key>"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/webhook/whatsapp/message-receipt", () => {

    let url = BASE_URL + `/v1/webhook/whatsapp/message-receipt`;
    let body = {};
    let params = {headers: {"Accept":"application/json"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

  });

}

export function handleSummary(data) {
  console.log("Preparing the end-of-test summary...");
  return {
    "test-report.html": htmlReport(data, {
      title: "Webhook - Test Report",
      template: "bootstrap",
    }),
  };
}
