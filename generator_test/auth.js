import http from "k6/http";
import { describe, expect } from "https://jslib.k6.io/k6chaijs/4.3.4.1/index.js";
import { htmlReport } from 'https://raw.githubusercontent.com/depapp/k6-reporter-bootstrap/main/dist/bundle.js';

const BASE_URL = "http://evercrm.dev.internal";

export default function() {
  describe("/v1/auth/login", () => {

    let url = BASE_URL + `/v1/auth/login`;
    let body = {"email":"string","password":"string"};
    let params = {headers: {"Accept":"application/json","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/auth/login-evermos", () => {

    let url = BASE_URL + `/v1/auth/login-evermos`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"Bearer <EVM Token>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/auth/login-merchant", () => {

    let url = BASE_URL + `/v1/auth/login-merchant`;
    let body = {"clientID":"string","merchantCode":"string","password":"string"};
    let params = {headers: {"Accept":"application/json","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/auth/logout", () => {

    let url = BASE_URL + `/v1/auth/logout`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Access Token>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/auth/refresh-token", () => {

    let url = BASE_URL + `/v1/auth/refresh-token`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Refresh Token>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/auth/team-membership/regenerate", () => {

    let url = BASE_URL + `/v1/auth/team-membership/regenerate`;
    let body = {"teamMembershipId":"cb6b3eeb-2fa0-4492-91eb-67a7101a5424","useSelfAccount":true};
    let params = {headers: {"Accept":"application/json","Authorization":"<Access Token>"}};
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
      title: "auth - Test Report",
      template: "bootstrap",
    }),
  };
}
