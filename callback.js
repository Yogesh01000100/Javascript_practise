function main_function(scopecallback)
{
    scopecallback("value passed to the callback");
}

function callback(val)// so that is why it feels how we are calling the callback in main_function without arguments
{
    console.log("VALUE : "+val);
}

main_function(callback) // it is the duty of the main_function that it will add some arguments in its explanation