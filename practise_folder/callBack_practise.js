function callback(a) { // a is the value that is logged
  console.log("Response value from the callback! : ", a);
}

function higherFunction(cb) {
  let number = 23;
  setTimeout(function () {
    cb(number);     // the higherFunction definition
  }, 2000);         // will have the implementation to pass the 
}                   // parameters

higherFunction(callback);  // only the reference to the callback

// reference to the fetch example

// function callback(params) // here the params according to the 
// {                         // higher order function i.e fetch 
//     implementation for the callback function()
// }


// fetch('url/data').then(callback); // use .then() if it returns a promise