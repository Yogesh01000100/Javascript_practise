function callBackFn()
{
    console.log("RESPONSE!")
}

function higherOrderAsync(callBack)
{
    setTimeout(callBack,5000);
}


higherOrderAsync(callBackFn)