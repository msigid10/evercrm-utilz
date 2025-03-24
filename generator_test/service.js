import http from "k6/http";
import { describe, expect } from "https://jslib.k6.io/k6chaijs/4.3.4.1/index.js";
import { htmlReport } from 'https://raw.githubusercontent.com/depapp/k6-reporter-bootstrap/main/dist/bundle.js';

const BASE_URL = "http://evercrm.dev.internal";

export default function() {
  describe("/health", () => {

    let url = BASE_URL + `/health`;
    let body = {};
    let params = {headers: {"Accept": "application/json"}};
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
      title: "service - Test Report",
      template: "bootstrap",
    }),
  };
}
