import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '30s', target: 50 },   // 워밍업
        { duration: '1m', target: 100 },    // 정상 부하
        { duration: '1m', target: 200 },    // 피크
        { duration: '30s', target: 0 },     // 종료
    ],
};

export default function () {
    const articleId = 243735973418971136;
    const url = `http://localhost:9000/v1/articles/${articleId}`;

    const res = http.get(url);

    check(res, {
        'status is 200': (r) => r.status === 200,
    });

    sleep(1);
}

//   █ TOTAL RESULTS
//
// checks_total.......................: 17058   94.243768/s
// checks_succeeded...................: 0.00%   0 out of 17058
// checks_failed......................: 100.00% 17058 out of 17058
//
//     ✗ status is 200
//       ↳  0% — ✓ 0 / ✗ 17058
//
// HTTP
// http_req_duration......................: avg=12.96ms min=1.97ms med=7.98ms max=375.56ms p(90)=20.17ms p(95)=36.9ms
// http_req_failed........................: 100.00% 17058 out of 17058
// http_reqs..............................: 17058   94.243768/s
//
// EXECUTION
// iteration_duration.....................: avg=1.01s   min=1s     med=1s     max=1.37s    p(90)=1.02s   p(95)=1.04s
// iterations.............................: 17058   94.243768/s
// vus....................................: 1       min=1              max=199
// vus_max................................: 200     min=200            max=200
//
// NETWORK
// data_received..........................: 4.7 MB  26 kB/s
// data_sent..............................: 1.7 MB  9.4 kB/s
//
//
//
//
// running (3m01.0s), 000/200 VUs, 17058 complete and 0 interrupted iterations
// default ✓ [======================================] 000/200 VUs  3m0s