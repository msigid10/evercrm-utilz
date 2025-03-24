import http from "k6/http";
import { describe, expect } from "https://jslib.k6.io/k6chaijs/4.3.4.1/index.js";
import { htmlReport } from 'https://raw.githubusercontent.com/depapp/k6-reporter-bootstrap/main/dist/bundle.js';

const BASE_URL = "http://evercrm.dev.internal";

export default function() {
  describe("/v1/customer-contact", () => {

    let url = BASE_URL + `/v1/customer-contact`;
    let body = {"deviceKey":"string","pagination":{"page":0,"pageSize":0}};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/customer-contact/callback/migrate", () => {

    let url = BASE_URL + `/v1/customer-contact/callback/migrate`;
    let body = {};
    let params = {headers: {"Accept":"application/json"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/customer-contact/callback/sync", () => {

    let url = BASE_URL + `/v1/customer-contact/callback/sync`;
    let body = {};
    let params = {headers: {"Accept":"application/json"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/customer-contact/sync", () => {

    let url = BASE_URL + `/v1/customer-contact/sync`;
    let body = {"contactKey":["string"],"customerStatus":"inactive","deviceKey":"string","useSync":false};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/customer-contact/sync/{syncID}", () => {
    let syncID = "syncID";
    let withDetail = "switch is the snapshot will be shown or not";

    let url = BASE_URL + `/v1/customer-contact/sync/${syncID}?withDetail=${withDetail}`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.get(url, JSON.stringify(body), params);

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
      title: "Customer Contact - Test Report",
      template: "bootstrap",
    }),
  };
}
