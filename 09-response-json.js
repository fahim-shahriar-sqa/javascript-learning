const response = {
    json() {
        return {
            token: 'abc123',
            user: 'admin'
        }
    }
}

const loginData = response.json();

console.log(`Token: ${loginData.token}`);
console.log(`User: ${loginData.user}`);