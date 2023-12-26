// second way of handling asynchronous code is by using
// Promises, inside the promise constructor we pass the
// function with 2 params res & reject

var prom_obj = new Promise(function (res, rej) {
  setTimeout(function () {
    res("hello!");
  }, 2000);
});

function callBackFn() {
  console.log(prom_obj); // state of promise after handling
}

prom_obj.then(callBackFn);
console.log(prom_obj); // state of promise while executing the code


/*  ## second case creating our own promise functions  */
function my_promise() {
  return new Promise((res) => {
    setTimeout(() => {
      // any type of reading async operation
      res("database answer!");
    }, 2000);
  });
}

// using a callback and handling using a .then()
function callBack(data) {
  //
  console.log("data : ", data);
}
my_promise().then(callBack);

let ans = my_promise(); // noob way to log data from a async function
console.log(ans); // this function returns a Promise so, we have to handle
// this differently, this is a different type of function
// Asynchronous function

// arrow function implementation
// new Promise((resolve,reject)=>{
//    resolve("data");
// });
