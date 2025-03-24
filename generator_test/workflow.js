import http from "k6/http";
import { describe, expect } from "https://jslib.k6.io/k6chaijs/4.3.4.1/index.js";
import { htmlReport } from 'https://raw.githubusercontent.com/depapp/k6-reporter-bootstrap/main/dist/bundle.js';

const BASE_URL = "http://evercrm.dev.internal";

export default function() {
  describe("/v1/workflow", () => {

    let url = BASE_URL + `/v1/workflow`;
    let body = {"description":"string","name":"string","type":"string"};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

  });

  describe("/v1/workflow/broadcast/execution", () => {
    let workflowIds = "The workflow Ids (separated by comma)";
    let executionIds = "The execution Ids (separated by comma)";
    let status = "The status of message (separated by comma, value : requesting, processing, failed, success, delivered, read)";
    let dateFrom = "The start of date range (ex: 2023-07-01)";
    let dateTo = "The end of date range (ex: 2023-07-01)";
    let hourFrom = "The start of hour range (ex: 08:21:00)";
    let hourTo = "The end of hour range (ex: 08:30:00)";
    let dateTimeFrom = "The start of datetime range (ex: 2023-07-01 08:21:00)";
    let dateTimeTo = "The end of datetime range (ex: 2023-07-01 08:21:00)";
    let sortBy = "The sort field (value: createdAt) default: createdAt";
    let sortDirection = "The sort direction (value: asc,desc) default: desc";
    let page = "The page of data";
    let pageSize = "The size of page";

    let url = BASE_URL + `/v1/workflow/broadcast/execution?workflowIds=${workflowIds}&executionIds=${executionIds}&status=${status}&dateFrom=${dateFrom}&dateTo=${dateTo}&hourFrom=${hourFrom}&hourTo=${hourTo}&dateTimeFrom=${dateTimeFrom}&dateTimeTo=${dateTimeTo}&sortBy=${sortBy}&sortDirection=${sortDirection}&page=${page}&pageSize=${pageSize}`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.get(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/workflow/broadcast/execution-list", () => {
    let workflowIds = "The workflow Ids (separated by comma)";
    let executionIds = "The execution Ids (separated by comma)";
    let status = "The status of execution (value : processing, failed, success)";
    let dateFrom = "The start of date range (ex: 2023-07-01)";
    let dateTo = "The end of date range (ex: 2023-07-01)";
    let hourFrom = "The start of hour range (ex: 08:21:00)";
    let hourTo = "The end of hour range (ex: 08:30:00)";
    let dateTimeFrom = "The start of datetime range (ex: 2023-07-01 08:21:00)";
    let dateTimeTo = "The end of datetime range (ex: 2023-07-01 08:21:00)";
    let sortBy = "The sort field (value: createdAt) default: createdAt";
    let sortDirection = "The sort direction (value: asc,desc) default: desc";
    let page = "The page of data";
    let pageSize = "The size of page";

    let url = BASE_URL + `/v1/workflow/broadcast/execution-list?workflowIds=${workflowIds}&executionIds=${executionIds}&status=${status}&dateFrom=${dateFrom}&dateTo=${dateTo}&hourFrom=${hourFrom}&hourTo=${hourTo}&dateTimeFrom=${dateTimeFrom}&dateTimeTo=${dateTimeTo}&sortBy=${sortBy}&sortDirection=${sortDirection}&page=${page}&pageSize=${pageSize}`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.get(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/workflow/broadcast/migrate-to-customizable", () => {

    let url = BASE_URL + `/v1/workflow/broadcast/migrate-to-customizable`;
    let body = {"workflowIds":["string"]};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","Migration-Secret":"<Migration Secret>"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/workflow/broadcast/retry", () => {

    let url = BASE_URL + `/v1/workflow/broadcast/retry`;
    let body = {"filter":{"executions":[],"filterBy":"string","timeRange":{"dateFrom":"2023-08-14","dateTimeFrom":"2023-08-14 08:30:30","dateTimeTo":"2023-08-14 08:30:30","dateTo":"2023-08-14","hourFrom":"08:30:30","hourTo":"08:30:30"}},"status":["string"]};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/workflow/broadcast/run", () => {

    let url = BASE_URL + `/v1/workflow/broadcast/run`;
    let body = {"messageParameter":[],"rules":[],"sendTo":["string"],"sendToByPhoneNumber":["string"],"taskID":"string","workflowID":"string"};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-Client-Application":"Client Application (ex: appsmith)","X-API-Key":"<API Key>"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/workflow/broadcast/scheduler/long-execution", () => {
    let sendNotification = "Flag for notification.";
    let threshold = "Time threshold (default: 60m).";

    let url = BASE_URL + `/v1/workflow/broadcast/scheduler/long-execution?sendNotification=${sendNotification}&threshold=${threshold}`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Intools-Secret":"<Internal Secret>"}};
    let response = http.get(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/workflow/broadcast/{taskId}/scheduler/run", () => {
    let taskId = "taskId";

    let url = BASE_URL + `/v1/workflow/broadcast/${taskId}/scheduler/run`;
    let body = {"executionId":0,"executionTime":"string","requestIdForRerun":"string","startFromPage":0,"workflowTimezone":"string"};
    let params = {headers: {"Accept":"application/json","Internal-N8N-Key":"<API Key>"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/workflow/filter", () => {

    let url = BASE_URL + `/v1/workflow/filter`;
    let body = {"fields":["string"],"filter":[],"pagination":{"page":0,"pageSize":0},"sort":[]};
    let params = {headers: {"Accept":"application/json","Authorization":"Bearer <Access Token>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/workflow/filter-with-rule", () => {

    let url = BASE_URL + `/v1/workflow/filter-with-rule`;
    let body = {"isActive":true,"rules":[]};
    let params = {headers: {"Accept":"application/json","Authorization":"Bearer <Access Token>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/workflow/history", () => {

    let url = BASE_URL + `/v1/workflow/history`;
    let body = {"pagination":{"cursor":"string","limit":0},"status":"string","workflowID":"string"};
    let params = {headers: {"Accept":"application/json","Authorization":"<Token>","X-API-Key":"<API Key>"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/workflow/history/{workflowId}/{executionId}", () => {
    let workflowId = "workflowId";
    let executionId = "executionId";

    let url = BASE_URL + `/v1/workflow/history/${workflowId}/${executionId}`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Token>","X-API-Key":"<API Key>"}};
    let response = http.get(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/workflow/{id}", () => {
    let id = "id";

    let url = BASE_URL + `/v1/workflow/${id}`;
    let body = {"description":"string","name":"string"};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.put(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/workflow/{id}", () => {
    let id = "id";

    let url = BASE_URL + `/v1/workflow/${id}`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.delete(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/workflow/{id}/activate", () => {
    let id = "id";

    let url = BASE_URL + `/v1/workflow/${id}/activate`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.put(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/workflow/{id}/broadcast/execution/{executionId}", () => {
    let id = "id";
    let executionId = "executionId";
    let status = "The status of message (separated by comma, value : requesting, processing, failed, success, delivered, read)";
    let timeRangeField = "The time range field (createdAt)";
    let timeFrom = "The start of time range (ex: 2023-07-01 10:00:00)";
    let timeTo = "The end of time range (ex: 2023-07-01 10:00:00)";
    let sortBy = "The sort field (value: createdAt) default: createdAt";
    let sortDirection = "The sort direction (value: asc,desc) default: desc";
    let page = "The page of data";
    let pageSize = "The size of page";

    let url = BASE_URL + `/v1/workflow/${id}/broadcast/execution/${executionId}?status=${status}&timeRangeField=${timeRangeField}&timeFrom=${timeFrom}&timeTo=${timeTo}&sortBy=${sortBy}&sortDirection=${sortDirection}&page=${page}&pageSize=${pageSize}`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.get(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/workflow/{id}/broadcast/execution/{executionId}/summary", () => {
    let id = "id";
    let executionId = "executionId";

    let url = BASE_URL + `/v1/workflow/${id}/broadcast/execution/${executionId}/summary`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.get(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/workflow/{id}/broadcast/task", () => {
    let id = "id";

    let url = BASE_URL + `/v1/workflow/${id}/broadcast/task`;
    let body = {"customerSegmentationId":"string","messageDelayConfiguration":{"batchSize":0,"maxDelay":0,"minDelay":0},"messageTemplateKey":"string","name":"string","rules":[],"useSegmentation":true};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.post(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

  });

  describe("/v1/workflow/{id}/deactivate", () => {
    let id = "id";

    let url = BASE_URL + `/v1/workflow/${id}/deactivate`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.put(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/workflow/{id}/detail", () => {
    let id = "id";

    let url = BASE_URL + `/v1/workflow/${id}/detail`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Token>","X-API-Key":"<API Key>"}};
    let response = http.get(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/workflow/{id}/rollback", () => {
    let id = "id";

    let url = BASE_URL + `/v1/workflow/${id}/rollback`;
    let body = {"versionId":"string"};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.put(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/workflow/{id}/task/broadcast/{taskId}", () => {
    let id = "id";
    let taskId = "taskId";

    let url = BASE_URL + `/v1/workflow/${id}/task/broadcast/${taskId}`;
    let body = {"customerSegmentationId":"string","messageDelayConfiguration":{"batchSize":0,"maxDelay":0,"minDelay":0},"messageTemplateKey":"string","name":"string","rules":[],"useSegmentation":true};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>"}};
    let response = http.put(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/workflow/{id}/version/list", () => {
    let id = "id";
    let page = "The page of data";
    let pageSize = "The size of page";

    let url = BASE_URL + `/v1/workflow/${id}/version/list?page=${page}&pageSize=${pageSize}`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Internal Secret>","X-API-Key":"<API Key>","X-Client-Application":"Client Application (ex: appsmith)"}};
    let response = http.get(url, JSON.stringify(body), params);

    // print API response
    console.log(response.body);

    // test assertion section
    expect(response.status, 'API status code').to.equal(200);
  });

  describe("/v1/workflow/{id}/version/{versionId}/preview", () => {
    let id = "id";
    let versionId = "versionId";

    let url = BASE_URL + `/v1/workflow/${id}/version/${versionId}/preview`;
    let body = {};
    let params = {headers: {"Accept":"application/json","Authorization":"<Token>","X-API-Key":"<API Key>"}};
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
      title: "Workflow - Test Report",
      template: "bootstrap",
    }),
  };
}
