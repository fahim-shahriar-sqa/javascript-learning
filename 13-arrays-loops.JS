const testUsers = [
    {
        username: "admin",
        password: "admin123"
    },
    {
        username: "manager",
        password: "manager123"
    },
    {
        username: "tester",
        password: "tester123"
    },
]

for (const user of testUsers){
    console.log(`Testing login for ${user.username}`)
}

