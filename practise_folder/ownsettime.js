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
    console.log("variable : ");
});