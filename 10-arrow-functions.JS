const createAuthHeader = (token) => {
    return {
        Cookie: `token=${token}`
    };
};

const headers =
    createAuthHeader("abc123");

console.log(headers);