import http from "k6/http";
import { describe, expect } from "https://jslib.k6.io/k6chaijs/4.3.4.1/index.js";
import { htmlReport } from 'https://raw.githubusercontent.com/depapp/k6-reporter-bootstrap/main/dist/bundle.js';

const BASE_URL = "http://evercrm.dev.internal";

export default function() {
  describe("/v1/customer-conversation/migrate", () => {

    let url = BASE_URL + `/v1/customer-conversation/migrate`;
    let body = {"batchEnd":0,"batchSize":0,"batchStart":0,"timeEnd":"2023-11-15 13:59:47","timeStart":"2023-11-15 13:59:47"};
    let params = {headers: {"Accept":"application/json","Intools-Secret":"<Migration Secret>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/customer-conversation/sync", () => {

    let url = BASE_URL + `/v1/customer-conversation/sync`;
    let body = {"customerStatus":["string"],"history":{"dataAt":"2023-02-11T13:52:54Z"},"isReview":true};
    let params = {headers: {"Accept":"application/json","Intools-Secret":"<Migration Secret>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.post(url, JSON.stringify(body), params);

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
      title: "Customer Conversation - Test Report",
      template: "bootstrap",
    }),
  };
}
