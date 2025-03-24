import http from "k6/http";
import { describe, expect } from "https://jslib.k6.io/k6chaijs/4.3.4.1/index.js";
import { htmlReport } from 'https://raw.githubusercontent.com/depapp/k6-reporter-bootstrap/main/dist/bundle.js';

const BASE_URL = "http://evercrm.dev.internal";

export default function() {
  describe("/v1/message/template/variable", () => {

    let url = BASE_URL + `/v1/message/template/variable`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.get(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/message/template/variable", () => {

    let url = BASE_URL + `/v1/message/template/variable`;
    let body = {"defaultValue":"string","description":"string","isNeedProcessing":false,"name":"string"};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

  });

  describe("/v1/message/template/variable/{id}", () => {
    let id = "id";

    let url = BASE_URL + `/v1/message/template/variable/${id}`;
    let body = {"defaultValue":"string","description":"string","isNeedProcessing":false,"name":"string"};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.put(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/message/template/variable/{id}", () => {
    let id = "id";

    let url = BASE_URL + `/v1/message/template/variable/${id}`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)"}};
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
      title: "Message Template Global Variable - Test Report",
      template: "bootstrap",
    }),
  };
}
