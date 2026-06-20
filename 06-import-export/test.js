import { baseUrl,username,environment,timeout } from "./config.js";
import { getAuthToken } from "./helpers.js";
import { createBookingPayload } from "./payloads.js";

console.log(baseUrl);
console.log(username);
console.log(environment);
console.log(timeout);

console.log(getAuthToken());

console.log(createBookingPayload());