function myOwnAsync(cb, duration) {
  setTimeout(() => {
    cb(25);
  }, duration);
}

myOwnAsync((va)=> { // adding data 
  console.log("Inside !",va);
}, 2500);

// # secondary example of using .then()
function HOF()
{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Data from HOF!")
        },5000);
    })
}

async function caller()
{
    let car = await HOF();
    console.log(car);
}
caller();

caller().then(()=>{
    console.log("variable : "); // after the promise is resolved, then we call the callback using the .then()
});

// sometimes we don't need to write the resolve(), we can write only resolve, when we need to pass any arguments then we can
// make use of this resolve() & that needs to be wrapped in a function when there is a need.

/* 
# approach 1
return new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Data from HOF!")
    }, 5000);
})

*/

/*
# approach 2
return new Promise((res,rej)=>{
    setTimeout(resolve, 5000); // resolve(); not required here
})


*/