function createBooking(firstName, lastName, totalPrice){
    console.log('First Name: ' + firstName)
    console.log('Last Name: ' + lastName)
    console.log('Price: ' + totalPrice)
}

createBooking('John', 'Doe', 1500);
createBooking('Mike', 'Brown', 1500);

function getBooking(bookingId){
    console.log(`Get/booking/${bookingId}`);
}

getBooking(1);
getBooking(5);
getBooking(10);