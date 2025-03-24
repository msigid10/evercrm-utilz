import http from 'k6/http';
import { check } from 'k6';

export const options = {
    vus: 1, // jumlah VUs yang digunakan
    iterations: 10, // jumlah total iterasi (dengan kata lain, total request)
};

const url = 'http://evercrm.dev.internal/v1/message/send';
const payload = JSON.stringify([
    {
        "content": "Halo Gaes Malam!",
        "deviceType": "whatsapp",
        "from": ["ab41icwIg"],
        "loadBalancerType": "failover",
        "to": ["6285643188065"],
        "useLoadBalancer": true
    }
]);

const params = {
    headers: {
        'accept': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMDAwMjg0NDQwNiwicm9sZUlkIjoxLCJyb2xlTmFtZSI6ImFkbWluIiwidGVhbUlkIjpudWxsLCJ0ZWFtTWVtYmVyc2hpcElkIjpudWxsLCJ0ZWFtT3duZXJJZCI6bnVsbCwibWVyY2hhbnRDb2RlIjoiZXZlcnBybyIsImlzcyI6IkV2ZXJDUk0iLCJleHAiOjE3MjMzODc1MTAsImlhdCI6MTcyMzEyODMxMH0.JwhHZos99tI79186bHtoGIN4zmMHCI4z2ZeiAJRMX08',
        'Content-Type': 'application/json',
    },
};

export default function () {
    const res = http.post(url, payload, params);
    check(res, {
        'status was 200': (r) => r.status === 200,
    });
}
