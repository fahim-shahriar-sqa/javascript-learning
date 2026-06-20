function createBookingPayload(firstName, lastName, totalPrice){
    return {firstName, lastName, totalPrice}
}

const payload = createBookingPayload('John', 'Doe', 1500);

console.log(payload);