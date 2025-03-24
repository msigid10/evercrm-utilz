import http from "k6/http";
import { check } from "k6";

let host = `http://evercrm-feature-branch-2.fb.internal`;

function getRandomName() {
  const firstNames = ["John", "Jane", "Alice", "Bob", "Eva"];
  const lastNames = ["Smith", "Johnson", "Williams", "Jones", "White"];

  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${randomFirstName} ${randomLastName}`;
}

function getRandomEmail() {
  const firstNames = ["john", "jane", "alice", "bob", "eva"];
  const lastNames = ["smith", "johnson", "williams", "jones", "white"];

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
    merchantCode: "everpro",
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
    email: "testingdeactivatefeaturebranch@mailsac.com",
    password: "123123123",
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
  verifyUser(the_userid, adminToken);
  login(the_email);
}
