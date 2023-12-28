function practiceAsync()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Promise Resolved !") // here whatever the promise is returned along with the resolve data
        },2500);                          // it is returned to the callback
    })
}


async function caller()
{
    let res=await practiceAsync();  // using the async function
    return res;
}

caller().then(function(data){  // here once the promise is resolved ( which contains the output/response ) from the async
    console.log(data);          // function we can pass that output as a parameter to the callback function
})


function callbackFn(data) // this callback can be again another async function
{
    console.log("test : ",data);
}

caller().then(callbackFn)