import http from "k6/http";
import { check } from "k6";

//Feature Branch
// let host = `http://evercrm-feature-branch-dl.fb.internal`;
//Dev
let host = `http://evercrm.dev.internal`;
// let host = `http://evercrm.prod.internal`;


function getRandomName() {
  const firstNames = ["AkuQA"];
  const lastNames = ["Smith", "Johnson", "Williams", "Jones", "White","Doe","Marce","Jone"];

  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${randomFirstName} ${randomLastName}`;
}

function getRandomEmail() {
  const firstNames = ["sigid"];
  const lastNames = ["smith", "johnson", "williams", "jones", "white","doe","marc"];

  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${randomFirstName}${randomLastName}@mailsac.com`;
}

function register(name, email) {
  const url = `${host}/v1/user/register`;
  const params = {
    headers: {
      accept: "application/json, text/plain, */*",
      "content-type": "application/json; charset=UTF-8",
    },
  };
  const payload = JSON.stringify({
    email: email,
    merchantCode: "evermos",
    name: name,
    password: "123123123",
  });
  const response = http.post(url, payload, params);
  const userid = response.json().data.id;
  console.log(`created email --> ${email}`);
  console.log(`created user id --> ${userid}`);
  return userid;
}

function adminLogin() {
  const url = `${host}/v1/auth/login`;
  const params = {
    headers: {
      accept: "application/json, text/plain, */*",
      "content-type": "application/json; charset=UTF-8",
    },
  };
  const payload = JSON.stringify({
    //admin FB
    // email: "admin1@gmail.com",
    
    //admin DEV
    email: "admin_dev@gmail.com",
    //admin Prod
    // email: "admin_dev@gmail.com",

    password: "password1",
  });
  const response = http.post(url, payload, params);
  const token = `Bearer ${response.json().data.accessToken}`;
  return token;
}

function verifyUser(userid, token) {
  const url = `${host}/v1/admin/user/${userid}/verify`;
  const params = {
    headers: {
      Authorization: `${token}`,
    },
  };
  const response = http.put(url, null, params);
  check(response, {
    "status is 200": (r) => r.status === 200,
  });
}

function login(email) {
  const url = `${host}/v1/auth/login`;
  const params = {
    headers: {
      accept: "application/json, text/plain, */*",
      "content-type": "application/json; charset=UTF-8",
    },
  };
  const payload = JSON.stringify({
    email: email,
    password: "123123123",
  });
  const response = http.post(url, payload, params);
  const token = `Bearer ${response.json().data.accessToken}`;
  console.log(`user test token --> ${token}`);
}

export default function () {
  const the_name = getRandomName();
  const the_email = getRandomEmail();
  const the_userid = register(the_name, the_email);
  const adminToken = adminLogin();
  // const adminToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMDAwMjg3NTM2MSwicm9sZUlkIjoxLCJyb2xlTmFtZSI6ImFkbWluIiwidGVhbUlkIjpudWxsLCJ0ZWFtTWVtYmVyc2hpcElkIjpudWxsLCJ0ZWFtT3duZXJJZCI6bnVsbCwibWVyY2hhbnRDb2RlIjoiZXZlcnBybyIsImlzcyI6IkV2ZXJDUk0iLCJleHAiOjE3MTczMDMxMTIsImlhdCI6MTcxNzA0MzkxMn0.hU0_9dvMIIOlsqOZXOVMytBXOQXGYj-mPlkhrJDeZ1c";
  verifyUser(the_userid, adminToken);
  login(the_email);
}
