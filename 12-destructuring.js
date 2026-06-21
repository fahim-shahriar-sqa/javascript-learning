const loginResponse = {
    token: "abc123",
    user: "admin",
    role: "tester"
};

const { token, user, role } = loginResponse;

console.log(`Token:  ${token}`);
console.log(`User:  ${user}`);
console.log(`Role:  ${role}`);