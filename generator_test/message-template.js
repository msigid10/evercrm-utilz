import http from "k6/http";
import { describe, expect } from "https://jslib.k6.io/k6chaijs/4.3.4.1/index.js";
import { htmlReport } from 'https://raw.githubusercontent.com/depapp/k6-reporter-bootstrap/main/dist/bundle.js';

const BASE_URL = "http://evercrm.dev.internal";

export default function() {
  describe("/v1/message/send-template", () => {

    let url = BASE_URL + `/v1/message/send-template`;
    let body = {"deviceType":"string","from":["string"],"loadBalancerType":"failover","template":"string","templateKey":"string","to":[],"useLoadBalancer":true,"workflow":{"executionId":0,"id":"string"}};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)","X-API-Key":"<API Key>"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/message/send-template/preview", () => {

    let url = BASE_URL + `/v1/message/send-template/preview`;
    let body = {"deviceType":"string","from":["string"],"loadBalancerType":"failover","template":"string","templateKey":"string","to":[],"useLoadBalancer":true,"workflow":{"executionId":0,"id":"string"}};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)","X-API-Key":"<API Key>"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/message/template", () => {

    let url = BASE_URL + `/v1/message/template`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.get(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/message/template", () => {

    let url = BASE_URL + `/v1/message/template`;
    let body = {"mediaUrl":"string","name":"string","template":"string"};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

  });

  describe("/v1/message/template/{id}", () => {
    let id = "id";

    let url = BASE_URL + `/v1/message/template/${id}`;
    let body = {"mediaUrl":"string","name":"string","template":"string"};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>"}};
    let response = http.put(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/message/template/{id}", () => {
    let id = "id";

    let url = BASE_URL + `/v1/message/template/${id}`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.delete(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/message/template/{key}", () => {
    let key = "key";

    let url = BASE_URL + `/v1/message/template/${key}`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
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
      title: "Message Template - Test Report",
      template: "bootstrap",
    }),
  };
}
