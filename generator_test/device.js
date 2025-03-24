import http from "k6/http";
import { describe, expect } from "https://jslib.k6.io/k6chaijs/4.3.4.1/index.js";
import { htmlReport } from 'https://raw.githubusercontent.com/depapp/k6-reporter-bootstrap/main/dist/bundle.js';

const BASE_URL = "http://evercrm.dev.internal";

export default function() {
  describe("/v1/device", () => {

    let url = BASE_URL + `/v1/device`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.get(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/device/assign", () => {

    let url = BASE_URL + `/v1/device/assign`;
    let body = {"deviceMapping":[]};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/device/filter", () => {

    let url = BASE_URL + `/v1/device/filter`;
    let body = {"config":{"showMemberSize":0},"fields":["string"],"filter":[],"pagination":{"page":0,"pageSize":0},"sort":[]};
    let params = {headers: {"Accept":"application/json","Authorization":"Bearer <Access Token>","X-Client-Application":"Client Application (ex: appsmith)","X-API-Key":"<API Key>"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/device/jid/sync", () => {

    let url = BASE_URL + `/v1/device/jid/sync`;
    let body = {"userDeviceIDs":[]};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","Intools-Secret":"<Migration Secret>","X-Client-Application":"Client Application (ex: appsmith)","X-API-Key":"<API Key>"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/device/registration-id/seed", () => {

    let url = BASE_URL + `/v1/device/registration-id/seed`;
    let body = {"userDeviceIDs":[]};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","Intools-Secret":"<Migration Secret>","X-Client-Application":"Client Application (ex: appsmith)","X-API-Key":"<API Key>"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/device/unassign", () => {

    let url = BASE_URL + `/v1/device/unassign`;
    let body = {"deviceMapping":[]};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/device/{deviceType}", () => {
    let deviceType = "deviceType";

    let url = BASE_URL + `/v1/device/${deviceType}`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/device/{deviceType}/link-by-phone-number", () => {
    let deviceType = "deviceType";

    let url = BASE_URL + `/v1/device/${deviceType}/link-by-phone-number`;
    let body = {"countryPrefix":"string","nationalNumber":"string"};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/device/{deviceType}/link/status/{session}", () => {
    let deviceType = "deviceType";
    let session = "session";

    let url = BASE_URL + `/v1/device/${deviceType}/link/status/${session}`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.get(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/device/{deviceType}/qr/{session}", () => {
    let deviceType = "deviceType";
    let session = "session";
    let isRescan = "flag for rescanning request";

    let url = BASE_URL + `/v1/device/${deviceType}/qr/${session}?isRescan=${isRescan}`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.get(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/device/{deviceType}/rescan/validate/{session}", () => {
    let deviceType = "deviceType";
    let session = "session";

    let url = BASE_URL + `/v1/device/${deviceType}/rescan/validate/${session}`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.get(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/device/{deviceType}/validate/{session}", () => {
    let deviceType = "deviceType";
    let session = "session";

    let url = BASE_URL + `/v1/device/${deviceType}/validate/${session}`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.get(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/device/{deviceType}/{deviceKey}", () => {
    let deviceType = "deviceType";
    let deviceKey = "deviceKey";

    let url = BASE_URL + `/v1/device/${deviceType}/${deviceKey}`;
    let body = {"deviceName":"string","isActive":true,"isEnableAutoSync":true};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.put(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/device/{deviceType}/{deviceKey}", () => {
    let deviceType = "deviceType";
    let deviceKey = "deviceKey";

    let url = BASE_URL + `/v1/device/${deviceType}/${deviceKey}`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.delete(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/device/{deviceType}/{deviceKey}/logout", () => {
    let deviceType = "deviceType";
    let deviceKey = "deviceKey";

    let url = BASE_URL + `/v1/device/${deviceType}/${deviceKey}/logout`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.put(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/device/{deviceType}/{deviceKey}/relink-by-phone-number", () => {
    let deviceType = "deviceType";
    let deviceKey = "deviceKey";

    let url = BASE_URL + `/v1/device/${deviceType}/${deviceKey}/relink-by-phone-number`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.put(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/device/{deviceType}/{deviceKey}/rescan", () => {
    let deviceType = "deviceType";
    let deviceKey = "deviceKey";

    let url = BASE_URL + `/v1/device/${deviceType}/${deviceKey}/rescan`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.put(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/device/{deviceType}/{deviceKey}/set-default", () => {
    let deviceType = "deviceType";
    let deviceKey = "deviceKey";

    let url = BASE_URL + `/v1/device/${deviceType}/${deviceKey}/set-default`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"Bearer <Access Token>","X-Client-Application":"Client Application (ex: appsmith)","X-API-Key":"<API Key>"}};
    let response = http.put(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/phone-number/validate", () => {

    let url = BASE_URL + `/v1/phone-number/validate`;
    let body = {"phone":["string"]};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)","X-API-Key":"<API Key>"}};
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
      title: "Device - Test Report",
      template: "bootstrap",
    }),
  };
}
