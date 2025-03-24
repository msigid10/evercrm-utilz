import http from "k6/http";
import { describe, expect } from "https://jslib.k6.io/k6chaijs/4.3.4.1/index.js";
import { htmlReport } from 'https://raw.githubusercontent.com/depapp/k6-reporter-bootstrap/main/dist/bundle.js';

const BASE_URL = "http://evercrm.dev.internal";

export default function() {
  describe("/v1/customer-segmentation/estimate-send-message", () => {

    let url = BASE_URL + `/v1/customer-segmentation/estimate-send-message`;
    let body = {"batchSize":0,"maxDelay":0,"minDelay":0,"segmentationId":"string"};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/user/accounts", () => {

    let url = BASE_URL + `/v1/user/accounts`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.get(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/user/member/bulk", () => {

    let url = BASE_URL + `/v1/user/member/bulk`;
    let body = {"useTransaction":true,"userIds":[]};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)","X-API-Key":"<API Key>"}};
    let response = http.delete(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

  });

  describe("/v1/user/member/bulk-by-email", () => {

    let url = BASE_URL + `/v1/user/member/bulk-by-email`;
    let body = {"useTransaction":true,"userEmails":["string"]};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)","X-API-Key":"<API Key>"}};
    let response = http.delete(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

  });

  describe("/v1/user/register", () => {

    let url = BASE_URL + `/v1/user/register`;
    let body = {"clientId":"string","email":"string","merchantCode":"string","name":"string","password":"string"};
    let params = {headers: {"Accept":"application/json","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

  });

  describe("/v1/user/register/bulk", () => {

    let url = BASE_URL + `/v1/user/register/bulk`;
    let body = {"useTransaction":true,"users":[]};
    let params = {headers: {"Accept":"application/json","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

  });

  describe("/v1/user/team-membership", () => {
    let memberIDs = "List of Member ID (separated by comma)";
    let userIDs = "List of User ID (separated by comma)";
    let page = "The page of data";
    let pageSize = "The size of page";

    let url = BASE_URL + `/v1/user/team-membership?memberIDs=${memberIDs}&userIDs=${userIDs}&page=${page}&pageSize=${pageSize}`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.get(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/user/team-membership", () => {

    let url = BASE_URL + `/v1/user/team-membership`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

  });

  describe("/v1/user/team-membership/qiscus-agent", () => {

    let url = BASE_URL + `/v1/user/team-membership/qiscus-agent`;
    let body = {"email":"string","name":"string"};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.put(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/user/team-membership/qiscus-agent", () => {

    let url = BASE_URL + `/v1/user/team-membership/qiscus-agent`;
    let body = {"emails":["string"]};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/user/team-membership/qiscus-agent", () => {

    let url = BASE_URL + `/v1/user/team-membership/qiscus-agent`;
    let body = {"emails":["string"]};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.delete(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/user/{id}", () => {
    let id = "id";

    let url = BASE_URL + `/v1/user/${id}`;
    let body = {"address":"string","clientId":"string","countryPrefix":"string","email":"string","merchantCode":"string","name":"string","nationalNumber":"string","password":"string","phoneNumber":"string"};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
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
      title: "User - Test Report",
      template: "bootstrap",
    }),
  };
}
