import http from "k6/http";
import { describe, expect } from "https://jslib.k6.io/k6chaijs/4.3.4.1/index.js";
import { htmlReport } from 'https://raw.githubusercontent.com/depapp/k6-reporter-bootstrap/main/dist/bundle.js';

const BASE_URL = "http://evercrm.dev.internal";

export default function() {
  describe("/v1/customer/insight-component", () => {

    let url = BASE_URL + `/v1/customer/insight-component`;
    let body = {"description":"string","groupKey":"string","key":"string","name":"string","valueType":"string"};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","Intools-Secret":"<Migration Secret>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/customer/insight-component/filter", () => {

    let url = BASE_URL + `/v1/customer/insight-component/filter`;
    let body = {"fields":["string"],"filter":[],"filterOr":[],"pagination":{"page":0,"pageSize":0},"sort":[]};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/customer/insight-component/{id}", () => {
    let id = "id";

    let url = BASE_URL + `/v1/customer/insight-component/${id}`;
    let body = {"description":"string","groupKey":"string","key":"string","name":"string","valueType":"string"};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","Intools-Secret":"<Migration Secret>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.put(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/customer/insight-component/{id}", () => {
    let id = "id";

    let url = BASE_URL + `/v1/customer/insight-component/${id}`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","Intools-Secret":"<Migration Secret>","X-Client-Application":"Client Application (ex: appsmith)"}};
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
      title: "Customer Insight Component - Test Report",
      template: "bootstrap",
    }),
  };
}
