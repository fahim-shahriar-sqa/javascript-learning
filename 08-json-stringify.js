const bookingPayload = {
    firstname: "John",
    lastname: "Doe",
    totalprice: 1200,
    depositpaid: true 
};

const requestbody = JSON.stringify(bookingPayload);

console.log(`Request Body ${requestbody}`);