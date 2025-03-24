import http from "k6/http";
import papaparse from "https://jslib.k6.io/papaparse/5.1.1/index.js";
import { SharedArray } from "k6/data";
import { check } from 'k6';

const csvData = new SharedArray("data", function () {
  return papaparse.parse(open("./output10.csv"), { header: false }).data;
});

let finishedCount = 0;
let onProgressCount = 0;

function checksync(syncid) {
  const url = `http://evercrm.dev.internal/v1/customer-contact/sync/${syncid}?withDetail=false`;
  const params = {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMDAwMjg0NDQwNiwicm9sZUlkIjoxLCJyb2xlTmFtZSI6ImFkbWluIiwidGVhbUlkIjpudWxsLCJ0ZWFtTWVtYmVyc2hpcElkIjpudWxsLCJtZXJjaGFudENvZGUiOiJldmVycHJvIiwiaXNzIjoiRXZlckNSTSIsImV4cCI6MTcwMDM1NzI1MywiaWF0IjoxNzAwMDk4MDUzfQ.RgPS2UgfVz5sSYcS8Zsl63D9fnCkDkQeGgWX_TcI9HM`,
    },
  };

  const response = http.get(url, params);
  const status = response.json()["data"]["status"];
  switch (status) {
    case "finished":
      finishedCount++;
      console.log(status + " ==== " + syncid);
      console.log("Total Data : " + response.json()["data"]["totalData"]);
      console.log("Current Synced : " + response.json()["data"]["currentSynced"]);
      console.log("Success : " + response.json()["data"]["success"]);
      console.log("--------------------------------");
      break;
    case "on progress":
      onProgressCount++;
      console.log(status + " ==== " + syncid);
      console.log("--------------------------------");
      break;
    default:
      break;
  }
  check(response, {
    'is Success correct': (r) => r.json()["data"]["success"] === 18292,
  });
}

export default function () {
  for (let i in csvData) {
    let data = csvData[i][0];
    checksync(data);
  }
  console.log("");
  console.log("SUMMARY");
  console.log("Finished count: " + finishedCount);
  console.log("On progress count: " + onProgressCount);
}
