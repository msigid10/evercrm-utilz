import http from "k6/http";
import { describe, expect } from "https://jslib.k6.io/k6chaijs/4.3.4.1/index.js";
import { htmlReport } from 'https://raw.githubusercontent.com/depapp/k6-reporter-bootstrap/main/dist/bundle.js';

const BASE_URL = "http://evercrm.dev.internal";

export default function() {
  describe("/v1/customer/bulk-create", () => {

    let url = BASE_URL + `/v1/customer/bulk-create`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)","X-API-Key":"<API Key>"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

  });

  describe("/v1/customer/bulk-delete", () => {

    let url = BASE_URL + `/v1/customer/bulk-delete`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.delete(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/customer/bulk-update-status", () => {

    let url = BASE_URL + `/v1/customer/bulk-update-status`;
    let body = {"customersStatus":[]};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","Intools-Secret":"<Internal Tool Secret>","X-Client-Application":"Client Application (ex: appsmith)","X-API-Key":"<API Key>"}};
    let response = http.put(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

  });

  describe("/v1/customer/detail", () => {
    let ids = "List of Customer ID (separated by comma)";
    let page = "The page of data";
    let pageSize = "The size of page";
    let showLastConversationAt = "selector for showing last conversation at data";

    let url = BASE_URL + `/v1/customer/detail?ids=${ids}&page=${page}&pageSize=${pageSize}&showLastConversationAt=${showLastConversationAt}`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.get(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/customer/exists", () => {

    let url = BASE_URL + `/v1/customer/exists`;
    let body = {"phoneNumbers":["string"]};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)","X-API-Key":"<API Key>"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/customer/filter", () => {

    let url = BASE_URL + `/v1/customer/filter`;
    let body = {"deviceFilter":{"isBanned":true},"fields":["string"],"filter":[],"filterOr":[],"pagination":{"page":0,"pageSize":0},"showInsight":true,"showLastConversationAt":true,"showTag":true,"sort":[]};
    let params = {headers: {"Accept":"application/json","Authorization":"Bearer <Access Token>","X-Client-Application":"Client Application (ex: appsmith)","X-API-Key":"<API Key>"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/customer/filter-segmentation", () => {

    let url = BASE_URL + `/v1/customer/filter-segmentation`;
    let body = {"pagination":{"page":0,"pageSize":0},"segmentationID":"string","showInsight":true,"showTag":true};
    let params = {headers: {"Accept":"application/json","Authorization":"Bearer <Access Token>","X-Client-Application":"Client Application (ex: appsmith)","X-API-Key":"<API Key>"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/customer/insight", () => {

    let url = BASE_URL + `/v1/customer/insight`;
    let body = {"components":[],"id":"string","idField":"string","source":"string"};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)","X-API-Key":"<API Key>","Intools-Secret":"<Intools Secret>"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/customer/insight/attribute", () => {
    let name = "Attibute Name (ex: baju)";
    let page = "The page of data";
    let pageSize = "The size of page";

    let url = BASE_URL + `/v1/customer/insight/attribute?name=${name}&page=${page}&pageSize=${pageSize}`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.get(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/customer/insight/bulk", () => {

    let url = BASE_URL + `/v1/customer/insight/bulk`;
    let body = {"data":[],"useTransaction":true};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)","X-API-Key":"<API Key>","Intools-Secret":"<Intools Secret>"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/customer/migrate-banned-device", () => {

    let url = BASE_URL + `/v1/customer/migrate-banned-device`;
    let body = {"newDeviceKey":"string","oldDeviceKey":"string"};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)","X-API-Key":"<API Key>"}};
    let response = http.put(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/customer/search", () => {

    let url = BASE_URL + `/v1/customer/search`;
    let body = {"deviceFilter":{"isBanned":true},"name":"string","pagination":null,"phoneNumber":"string","sort":[]};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)","X-API-Key":"<API Key>"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/customer/upload", () => {

    let url = BASE_URL + `/v1/customer/upload`;
    let body = {};
    let params = {headers: {"Authorization":"Bearer <Access Token>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/customer/{id}", () => {
    let id = "id";

    let url = BASE_URL + `/v1/customer/${id}`;
    let body = {"address":"string","dateOfBirth":"string","deviceKey":"string","districtName":"string","email":"string","externalCustomerId":"string","gender":"string","name":"string","phoneNumber":"string","placeOfBirth":"string","postalCode":"string","province":"string","status":"string","subdistrictName":"string","urbanName":"string"};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)","X-API-Key":"<API Key>"}};
    let response = http.put(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/customer/{id}", () => {
    let id = "id";

    let url = BASE_URL + `/v1/customer/${id}`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)","X-API-Key":"<API Key>"}};
    let response = http.delete(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/customer/{id}/insight", () => {
    let id = "id";

    let url = BASE_URL + `/v1/customer/${id}/insight`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.get(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/customer/{id}/insight/attribute", () => {
    let id = "id";
    let name = "Attibute Name (ex: baju)";
    let page = "The page of data";
    let pageSize = "The size of page";

    let url = BASE_URL + `/v1/customer/${id}/insight/attribute?name=${name}&page=${page}&pageSize=${pageSize}`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.get(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/customer/{id}/insight/global", () => {
    let id = "id";
    let source = "Source (ex: everpro)";

    let url = BASE_URL + `/v1/customer/${id}/insight/global?source=${source}`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.get(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/customer/{id}/insight/local", () => {
    let id = "id";
    let attributeName = "Source (ex: baju)";
    let source = "Source (ex: everpro)";

    let url = BASE_URL + `/v1/customer/${id}/insight/local?attributeName=${attributeName}&source=${source}`;
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
      title: "Customer - Test Report",
      template: "bootstrap",
    }),
  };
}
