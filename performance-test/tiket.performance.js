import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    //   discardResponseBodies: true,
      scenarios: {
        contacts: {
          executor: 'per-vu-iterations',
          vus: 1,
          iterations: 20,
          maxDuration: '5m',
        },
      },
    };

const url = 'http://evm-tickets.dev.internal/v1/public/tickets/transactions';
const headers = {
    'accept': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImRldjEiLCJ0eXAiOiJKV1QifQ...',
    'Content-Type': 'application/json'
};

const payload = JSON.stringify({
    "orderDate": "2025-03-10 11:50:51",
    "orderCode": "7270-1741766895",
    "payment": "Non COD",
    "transactionStatus": "processed",
    "complaintCategoryId": "00a2f89a-efc7-45c1-9b60-75094be5a477",
    "complaintCategory": "Pesanan belum dikirim",
    "totalProduct": 1,
    "productImages": [
        "https://assets.evermos.com/public/original/q:100/evermos-staging/product/model/1cfb5916-ca48-45aa-9716-ab1fde2032b6"
    ],
    "complaintReasonId": "",
    "complaintReason": null,
    "complaintReasonText": null,
    "complaintForm": [
        {
            "orderReceipt": "5739-1741766895",
            "courierName": "ID Express iDSTD (2-3 hari)",
            "awb": "",
            "evidenceVideo": "",
            "products": [
                {
                    "productId": 100000902713,
                    "productSku": "fss00120101",
                    "productName": "Toko Fous - Milk Sapi Cow 500ml Coklat"
                }
            ]
        }
    ]
});

export default function () {
    let res = http.post(url, payload, { headers });
    check(res, {
        'is status 200': (r) => r.status === 200,
        // 'response time < 500ms': (r) => r.timings.duration < 500,
    });
    sleep(13);
}