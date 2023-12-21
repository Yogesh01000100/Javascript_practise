function getPromise(resolve)
{
    return new Promise(resolve);
}

function callBack()
{
    console.log("Final execution");
}
getPromise().then(callBack);