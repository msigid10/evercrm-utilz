import http from "k6/http";
import { check } from "k6";
import { randomString } from "https://jslib.k6.io/k6-utils/1.2.0/index.js";

// let host = `http://evercrm.prod.internal`;
// let host = `http://evercrm-evermos.prod.internal`;
// let host = `http://evercrm.dev.internal`;
let host = `http://evercrm-redundant.fb.internal`;
let bearerToken = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMDAwMjg3OTM4Miwicm9sZUlkIjoyLCJyb2xlTmFtZSI6ImltZXJzIiwidGVhbUlkIjpudWxsLCJ0ZWFtTWVtYmVyc2hpcElkIjpudWxsLCJ0ZWFtT3duZXJJZCI6bnVsbCwidGVhbU93bmVyUm9sZUlkIjpudWxsLCJtZXJjaGFudENvZGUiOiJldmVycHJvIiwiaXNzIjoiRXZlckNSTSIsImV4cCI6MTc0MjQzOTI2NywiaWF0IjoxNzQyMTgwMDY3fQ.r5z0LhfOx8hDUyKQ95CcxK7nKkSM09mqC2l1v6Derpo`;
let randomStringNya = randomString(10);
let waktunya = "2025-03-17 06:20"; // YYYY-MM-DD HH:MM using UTC
let messageDelayConfiguration = {
  "batchSize": 1,
  "maxDelay": 2,
  "minDelay": 1
}
/*
1. run `k6 run register-until-verified-evercrm/link-device-by-phone-number.js`
2. input pair code on whatsapp app
3. run create-workflow.js using `k6 run register-until-verified-evercrm/create-workflow.js`
*/

function getDeviceKey(bearerToken) {
  const url = `${host}/v1/device`;
  const params = {
    headers: {
      accept: "application/json, text/plain, */*",
      "content-type": "application/json; charset=UTF-8",
      Authorization: `${bearerToken}`,
    },
  };
  const response = http.get(url, params);
  console.log(`RESP BODY : DEVICE KEY --> ${response.body}`);
  const deviceKey = response.json().data[0].deviceKey;
  console.log(`THE DEVICE KEY --> ${deviceKey}`);
  return deviceKey;
  console.log(`===============`);
  console.log(``);
}

function manualSyncContact(bearerToken, deviceKey) {
  const url = `${host}/v1/customer-contact/sync`;
  const params = {
    headers: {
      accept: "application/json, text/plain, */*",
      "content-type": "application/json; charset=UTF-8",
      Authorization: `${bearerToken}`,
    },
  };
  const payload = JSON.stringify({
    customerStatus: "active",
    deviceKey: deviceKey,
    useSync: false,
  });
  const response = http.post(url, payload, params);
  console.log(`RESP BODY : MANUAL SYNC CONTACT --> ${response.body}`);
  check(response, {
    "status is 200": (r) => r.status === 200,
  });
  console.log(`===============`);
  console.log(``);
}

function createMessageTemplate(bearerToken) {
  const url = `${host}/v1/message/template`;
  const params = {
    headers: {
      accept: "application/json, text/plain, */*",
      "content-type": "application/json; charset=UTF-8",
      Authorization: `${bearerToken}`,
    },
  };
  const payload = JSON.stringify({
    mediaUrl: "https://www.psdstamps.com/wp-content/uploads/2022/04/test-stamp-png.png",
    name: "Message Template for Throtle",
    template:
      "Hi {{ .nama_penerima }} selamat siang[EVERMOS]. REDUNDANT. Hari yang indah ditemani Nescafe Capucino. \n\n #k6-25-November-2024",
  });
  const response = http.post(url, payload, params);
  console.log(`RESP BODY : CREATE MESSAGE TEMPLATE --> ${response.body}`);
  const messageTemplateKey = response.json().data.key;
  console.log(`THE MESSAGE TEMPLATE KEY --> ${messageTemplateKey}`);
  return messageTemplateKey;
  console.log(`===============`);
  console.log(``);
}

function createTag(bearerToken) {
  const url = `${host}/v1/customer/tag/bulk-create`;
  const params = {
    headers: {
      accept: "application/json, text/plain, */*",
      "content-type": "application/json; charset=UTF-8",
      Authorization: `${bearerToken}`,
    },
  };
  const payload = JSON.stringify([
    {
      color: "FFFFFF",
      name: `circleku #${randomStringNya}`,
    },
  ]);
  const response = http.post(url, payload, params);
  console.log(`RESP BODY : CREATE TAG --> ${response.body}`);
  const tagKey = response.json().data[0].key;
  console.log(`THE TAG KEY --> ${tagKey}`);
  return tagKey;
  console.log(`===============`);
  console.log(``);
}

function getCustomerId(bearerToken, tagKey) {
  const url = `${host}/v1/customer/filter`;
  const params = {
    headers: {
      accept: "application/json, text/plain, */*",
      "content-type": "application/json; charset=UTF-8",
      Authorization: `${bearerToken}`,
    },
  };
  const payload = JSON.stringify({});
  const response = http.post(url, payload, params);
  console.log(`RESP BODY : GET CUSTOMER ID --> ${response.body}`);
  const customerId1 = response.json().data[0].id;
  const customerId2 = response.json().data[1].id;
  
  const customerPhoneNumber1 = response.json().data[0].phoneNumber;
  const customerPhoneNumber2 = response.json().data[1].phoneNumber;
  
  console.log(`THE CUSTOMER PHONE NUMBER 1 --> ${customerPhoneNumber1}`);
  console.log(`THE CUSTOMER PHONE NUMBER 2 --> ${customerPhoneNumber2}`);
  
  console.log(`===============`);
  console.log(``);

  // LINK TAG TO CUSTOMER
  const url2 = `${host}/v1/customer/tag/link`;
  const params2 = {
    headers: {
      accept: "application/json, text/plain, */*",
      "content-type": "application/json; charset=UTF-8",
      Authorization: `${bearerToken}`,
    },
  };
  const payload2 = JSON.stringify([
    {
      customerId: customerId1,
      customerTagKey: tagKey,
    },
    {
      customerId: customerId2,
      customerTagKey: tagKey,
    },
  ]);
  const response2 = http.post(url2, payload2, params2);
  console.log(`RESP BODY : LINK TAG TO CUSTOMER --> ${response.body}`);
  check(response2, {
    "status is 200": (r) => r.status === 200,
  });
  console.log(`===============`);
  console.log(``);
}

function createSegmentation(bearerToken) {
  const url = `${host}/v1/customer-segmentation`;
  const params = {
    headers: {
      accept: "application/json, text/plain, */*",
      "content-type": "application/json; charset=UTF-8",
      Authorization: `${bearerToken}`,
    },
  };
  const payload = JSON.stringify({
    description: "Deskripsi: Segmentasi untuk Scheduler Workflow Internal",
    name: `Segmentasi untuk Scheduler Workflow Internal #${randomStringNya}`,
    rules: [
      {
        fieldName: "province",
        fieldType: "customer",
        value: "internal",
        valueOperator: "in",
      },
    ],
    status: "active",
  });
  const response = http.post(url, payload, params);
  console.log(`RESP BODY : CREATE SEGMENTATION --> ${response.body}`);
  const segmentationId = response.json().data.id;
  console.log(`THE SEGMENTATION ID --> ${segmentationId}`);
  return segmentationId;
  console.log(`===============`);
  console.log(``);
}

function createWorkflow(bearerToken) {
  const url = `${host}/v1/workflow`;
  const params = {
    headers: {
      accept: "application/json, text/plain, */*",
      "content-type": "application/json; charset=UTF-8",
      Authorization: `${bearerToken}`,
    },
  };
  const payload = JSON.stringify({
    description: `Workflow Created using K6 #${randomStringNya}`,
    name: `Workflow Created using K6 #${randomStringNya}`,
    type: "scheduler",
  });
  const response = http.post(url, payload, params);
  console.log(`RESP BODY : CREATE WORKFLOW --> ${response.body}`);
  const workflowId = response.json().data.id;
  console.log(`THE WORKFLOW ID --> ${workflowId}`);
  return workflowId;
  console.log(`===============`);
  console.log(``);
}

function broadcastTask(
  bearerToken,
  workflowId,
  segmentationId,
  messageTemplateKey,
  datetime
) {
  const url = `${host}/v1/workflow/${workflowId}/broadcast/task`;
  const params = {
    headers: {
      accept: "application/json, text/plain, */*",
      "content-type": "application/json; charset=UTF-8",
      Authorization: `${bearerToken}`,
    },
  };
  const payload = JSON.stringify({
    customerSegmentationId: segmentationId,
    messageTemplateKey: messageTemplateKey,
    messageDelayConfiguration: messageDelayConfiguration,
    name: `Broadcast Taskz Workflow Analysis #${randomStringNya}`,
    rules: [
      {
        scheduler: {
          properties: [
            {
              type: "datetime",
              value: datetime,
            },
          ],
          type: "exact",
        },
        type: "scheduler",
      },
    ],
    useSegmentation: true,
  });
  const response = http.post(url, payload, params);
  console.log(`RESP BODY : BROADCAST TASK --> ${response.body}`);
  console.log(response.body);
  console.log(`===============`);
}

function activateWorkflow(bearerToken, workflowId) {
  const url = `${host}/v1/workflow/${workflowId}/activate`;
  const params = {
    headers: {
      accept: "application/json, text/plain, */*",
      "content-type": "application/json; charset=UTF-8",
      Authorization: `${bearerToken}`,
    },
  };
  const response = http.put(url, null, params);
  console.log(`RESP BODY : ACTIVATE WORKFLOW --> ${response.body}`);
  console.log(`===============`);
}

export default function () {
  // const deviceKey = getDeviceKey(bearerToken);
  // manualSyncContact(bearerToken, deviceKey);
  const messageTemplateKey = createMessageTemplate(bearerToken);
  // const tagKey = createTag(bearerToken);
  // getCustomerId(bearerToken, tagKey);
  // const segmentationId = createSegmentation(bearerToken);
  //asegmentation aku_qajones
  const segmentationId = '4d68f27d-b6ec-42f0-a0ae-b7e0f19c26cd'
  // console.log(segmentationId)

  // const segmentationId = '0fcfdb1b-bef8-4509-8522-88e3169f6278';
  // const segmentationId = '7475aaca-c388-4d35-8251-b7fb35b20b7e';
  
  //dev
  // const segmentationId = 'e3f099dc-9a36-4b65-9934-f61aa8b2f7e0';

  //fb platform
  // const segmentationId = '6fb80b2d-b92b-4b94-8b54-6ec9a6e14ea2';

  //fb mailinator fb
  // const segmentationId = '6fb80b2d-b92b-4b94-8b54-6ec9a6e14ea2';

  //prod
  // const segmentationId = 'ecc53bc4-d96e-4a67-921a-40929d94f4a2';
  // const segmentationId = '12b7ce16-5be1-4ad3-b5e3-b1d820a1b89b';
  // const segmentationId = '29f6e649-3d5f-4554-9653-1b00287b4378';
  // const segmentationId = 'f2d2a557-1411-48ba-8f13-444f6a8b085c';
  // const segmentationId = '21eb9f45-af0e-4bdc-b511-3388d32e4b01';
  // const segmentationId = '8843ac5c-5bca-4a4f-8c2e-e68b4a4e3164';
  
  //evermos
  // const segmentationId = 'abc1186f-4e47-42c9-9fe8-2f855bfd2540';


  //VIP USER
  // const segmentationId = 'b21803a9-516e-4545-b951-5f5523763add';
  //VIP Evermos
  // const segmentationId = 'ae983a91-e02e-460b-b8ab-ac3322eabab0';
  //Migrate
  // const segmentationId = '21004ee7-7a0f-4bc4-86f1-289a150dceb5';
  const workflowId = createWorkflow(bearerToken);
  broadcastTask(
    bearerToken,
    workflowId,
    segmentationId,
    messageTemplateKey,
    waktunya
  );
  activateWorkflow(bearerToken, workflowId);
}
