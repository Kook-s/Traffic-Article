import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 100,
    duration: '2m',
};

export default function () {
    const baseUrl = __ENV.BASE_URL || 'http://localhost:9005';
    const boardId = __ENV.BOARD_ID || '1';
    const pageSize = __ENV.PAGE_SIZE || '30';
    const page = __ENV.PAGE || '1';
    const url =
        `${baseUrl}/v1/articles?boardId=${boardId}&pageSize=${pageSize}&page=${page}`;

    const res = http.get(url);

    check(res, {
        'status is 200': (r) => r.status === 200,
    });

    sleep(1);
}

//   █ TOTAL RESULTS
//
// checks_total.......................: 11900   98.783111/s
// checks_succeeded...................: 100.00% 11900 out of 11900
// checks_failed......................: 0.00%   0 out of 11900
//
//     ✓ status is 200
//
// HTTP
// http_req_duration.......................................................: avg=10.92ms min=1.25ms med=7.39ms max=180.36ms p(90)=19.5ms p(95)=29.78ms
// { expected_response:true }............................................: avg=10.92ms min=1.25ms med=7.39ms max=180.36ms p(90)=19.5ms p(95)=29.78ms
// http_req_failed.........................................................: 0.00%  0 out of 11900
// http_reqs...............................................................: 11900  98.783111/s
//
// EXECUTION
// iteration_duration......................................................: avg=1.01s   min=1s     med=1s     max=1.18s    p(90)=1.02s  p(95)=1.03s
// iterations..............................................................: 11900  98.783111/s
// vus.....................................................................: 100    min=100        max=100
// vus_max.................................................................: 100    min=100        max=100
//
// NETWORK
// data_received...........................................................: 60 MB  499 kB/s
// data_sent...............................................................: 1.3 MB 11 kB/s
//
//
//
//
// running (2m00.5s), 000/100 VUs, 11900 complete and 0 interrupted iterations
// default ✓ [======================================] 100 VUs  2m0s

//========================CQRS========================
// █ TOTAL RESULTS
//
// checks_total.......................: 10400   86.344504/s
// checks_succeeded...................: 100.00% 10400 out of 10400
// checks_failed......................: 0.00%   0 out of 10400
//
//     ✓ status is 200
//
// HTTP
// http_req_duration.......................................................: avg=156.72ms min=89.49ms med=139.27ms max=1.26s p(90)=182.42ms p(95)=196.3ms
// { expected_response:true }............................................: avg=156.72ms min=89.49ms med=139.27ms max=1.26s p(90)=182.42ms p(95)=196.3ms
// http_req_failed.........................................................: 0.00%  0 out of 10400
// http_reqs...............................................................: 10400  86.344504/s
//
// EXECUTION
// iteration_duration......................................................: avg=1.15s    min=1.09s   med=1.14s    max=2.27s p(90)=1.18s    p(95)=1.19s
// iterations..............................................................: 10400  86.344504/s
// vus.....................................................................: 100    min=100        max=100
// vus_max.................................................................: 100    min=100        max=100
//
// NETWORK
// data_received...........................................................: 78 MB  646 kB/s
// data_sent...............................................................: 1.1 MB 9.5 kB/s
//
//
//
//
// running (2m00.4s), 000/100 VUs, 10400 complete and 0 interrupted iterations
// default ✓ [======================================] 100 VUs  2m0s
