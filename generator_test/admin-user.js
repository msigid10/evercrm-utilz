import http from "k6/http";
import { describe, expect } from "https://jslib.k6.io/k6chaijs/4.3.4.1/index.js";
import { htmlReport } from 'https://raw.githubusercontent.com/depapp/k6-reporter-bootstrap/main/dist/bundle.js';

const BASE_URL = "http://evercrm.dev.internal";

export default function() {
  describe("/v1/admin/user/filter", () => {

    let url = BASE_URL + `/v1/admin/user/filter`;
    let body = {"fields":["string"],"filter":[],"pagination":{"page":0,"pageSize":0},"sort":[]};
    let params = {headers: {"Accept":"application/json","Authorization":"Bearer <Access Token>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/admin/user/{userId}", () => {
    let userId = "userId";

    let url = BASE_URL + `/v1/admin/user/${userId}`;
    let body = {"address":"string","countryPrefix":"string","isActive":true,"isVerified":true,"nationalNumber":"string","password":"string","phoneNumber":"string","roleId":0};
    let params = {headers: {"Accept":"application/json","Authorization":"Bearer <Access Token>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.put(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/admin/user/{userId}", () => {
    let userId = "userId";

    let url = BASE_URL + `/v1/admin/user/${userId}`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"Bearer <Access Token>"}};
    let response = http.delete(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/admin/user/{userId}/verify", () => {
    let userId = "userId";

    let url = BASE_URL + `/v1/admin/user/${userId}/verify`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"Bearer <Access Token>","X-Client-Application":"Client Application (ex: appsmith)","X-API-Key":"<API Key>"}};
    let response = http.put(url, JSON.stringify(body), params);

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
      title: "Admin/User - Test Report",
      template: "bootstrap",
    }),
  };
}
