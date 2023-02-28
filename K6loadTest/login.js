import http from "k6/http";
import { check } from "k6";
import { baseUrl, loginPayload } from "./config.js";

export default function() {
  const url = `${baseUrl}/api/login`;

  const params = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const res = http.post(url, JSON.stringify(loginPayload), params);

  check(res, {
    "status is 200": (r) => r.status === 200,
    "response body": (r) => JSON.parse(r.body).token !== undefined
  });
}
