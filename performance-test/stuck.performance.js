import http from 'k6/http';
import { check, sleep } from 'k6';

// Konfigurasi load test, misalnya 10 virtual users (vus) selama 30 detik
export const options = {
    scenarios: {
        contacts: {
          executor: 'per-vu-iterations',
          vus: 4,
          iterations: 1,
          maxDuration: '1m',
        },
      }
};

// URL endpoint
const url = 'http://evercrm.dev.internal/v1/device/IiXs0bMNR/whatsapp-label/sync';
const url1 = 'http://evercrm.dev.internal/v1/device/bKcQAbMNg/whatsapp-label/sync';

// Header dengan Authorization token
const params = {
  headers: {
    'accept': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMDAwMjg4MTIxMCwicm9sZUlkIjoyLCJyb2xlTmFtZSI6ImltZXJzIiwidGVhbUlkIjpudWxsLCJ0ZWFtTWVtYmVyc2hpcElkIjpudWxsLCJ0ZWFtT3duZXJJZCI6bnVsbCwibWVyY2hhbnRDb2RlIjoiZXZlcnBybyIsImlzcyI6IkV2ZXJDUk0iLCJleHAiOjE3MzE2NTk5MzcsImlhdCI6MTczMTQwMDczN30.__qsyuexVSaWNqXPxL2MMlL2hTZ8TqZj3ogHibnYHn4',
    'Content-Type': 'application/json',
  },
};

export default function () {
  // Mengirim request POST
  const res = http.post(url, null, params);
  const res1 = http.post(url1, null, params);
  console.log('res: ', res)
  console.log('res1: ', res1)

  // Memeriksa apakah request berhasil (status 200)
  check(res, {
    'status was 200': (r) => r.status === 200,
  });
  check(res1, {
    'status was 200': (r) => r.status === 200,
  });

}
