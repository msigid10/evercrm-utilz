import http from "k6/http";
import { describe, expect } from "https://jslib.k6.io/k6chaijs/4.3.4.1/index.js";
import { htmlReport } from 'https://raw.githubusercontent.com/depapp/k6-reporter-bootstrap/main/dist/bundle.js';

const BASE_URL = "http://evercrm.dev.internal";

export default function() {
  describe("/v1/message/message-history", () => {

    let url = BASE_URL + `/v1/message/message-history`;
    let body = {"filter":{"contentLike":"string","endDate":"string","isReplied":true,"startDate":"string"},"pagination":{"page":0,"pageSize":0}};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)","X-API-Key":"<API Key>"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/message/message-history/backup-and-cleanup", () => {

    let url = BASE_URL + `/v1/message/message-history/backup-and-cleanup`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)","X-API-Key":"<API Key>"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/message/send", () => {

    let url = BASE_URL + `/v1/message/send`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)","X-API-Key":"<API Key>"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/message/status", () => {
    let requestIDs = "List of Request ID of message (separated by comma)";
    let dstPhones = "The destination phone of message (separated by comma)";
    let status = "The status of message (separated by comma, value : requesting, processing, failed, success, delivered, read)";
    let timeRangeField = "The time range field (createdAt)";
    let timeFrom = "The start of time range (ex: 2023-07-01 10:00:00)";
    let timeTo = "The end of time range (ex: 2023-07-01 10:00:00)";
    let sortBy = "The sort field (value: createdAt,from,to,status) default: createdAt";
    let sortDirection = "The sort direction (value: asc,desc) default: desc";
    let page = "The page of data";
    let pageSize = "The size of page";

    let url = BASE_URL + `/v1/message/status?requestIDs=${requestIDs}&dstPhones=${dstPhones}&status=${status}&timeRangeField=${timeRangeField}&timeFrom=${timeFrom}&timeTo=${timeTo}&sortBy=${sortBy}&sortDirection=${sortDirection}&page=${page}&pageSize=${pageSize}`;
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
      title: "Message - Test Report",
      template: "bootstrap",
    }),
  };
}
