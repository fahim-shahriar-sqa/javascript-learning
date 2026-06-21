const commonHeaders = {
    "Content-Type": "application/json"
};

const authenticateHeaders = {
    ...commonHeaders,
    Cookie: "token=abc123"
};

console.log(authenticateHeaders);