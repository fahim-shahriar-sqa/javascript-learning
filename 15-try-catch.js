const statusCode = 200;

try {
    if (statusCode !== 200){
        throw new Error(`API validation failed. Status code ${statusCode}`);
    }else
        console.log("API validation passed")
}
catch (error){
    console.log(error.message);
};