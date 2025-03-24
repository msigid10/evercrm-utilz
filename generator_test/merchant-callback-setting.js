import http from "k6/http";
import { describe, expect } from "https://jslib.k6.io/k6chaijs/4.3.4.1/index.js";
import { htmlReport } from 'https://raw.githubusercontent.com/depapp/k6-reporter-bootstrap/main/dist/bundle.js';

const BASE_URL = "http://evercrm.dev.internal";

export default function() {
  describe("/v1/merchant/callback", () => {

    let url = BASE_URL + `/v1/merchant/callback`;
    let body = {"event":"string","isActive":false,"name":"string","urlCallback":"string"};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)","X-API-Key":"<API Key>","Intools-Secret":"<Migration Secret>"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/merchant/callback/filter", () => {

    let url = BASE_URL + `/v1/merchant/callback/filter`;
    let body = {"fields":["string"],"filter":[],"filterOr":[],"pagination":{"page":0,"pageSize":0},"sort":[]};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)","X-API-Key":"<API Key>","Intools-Secret":"<Migration Secret>"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/merchant/callback/{id}", () => {
    let id = "id";

    let url = BASE_URL + `/v1/merchant/callback/${id}`;
    let body = {"event":"string","isActive":false,"name":"string","urlCallback":"string"};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)","X-API-Key":"<API Key>","Intools-Secret":"<Migration Secret>"}};
    let response = http.put(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/merchant/callback/{id}", () => {
    let id = "id";

    let url = BASE_URL + `/v1/merchant/callback/${id}`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)","X-API-Key":"<API Key>","Intools-Secret":"<Migration Secret>"}};
    let response = http.delete(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

}

export function handleSummary(data) {
  console.log("Preparing the end-of-test summary...");
  return {
    "test-report.html": htmlReport(data, {
      title: "Merchant Callback Setting - Test Report",
      template: "bootstrap",
    }),
  };
}
