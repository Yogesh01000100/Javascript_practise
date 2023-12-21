// defining the promise
function PromiseFunction(resolve, reject) {
  const apiData = [
    {
      userId: 1,
      username: "john_doe",
      email: "john@example.com",
    },
    {
      userId: 2,
      username: "ram_sharma",
      email: "sharma@example.com",
    },
  ];
  setTimeout(() => {
    resolve(apiData);
  }, 3500);
}

function Fetch(url, httpverb) {
  if (httpverb.method == "GET") {
    console.log("URL : " + url);
    console.log("FETCHING API...");
    return new Promise(PromiseFunction); // returns the value from the PromiseFunction
  } else {
    console.log("ONLY GET METHOD SUPPORTED!");
  }
}

// using the promise
var obj = {
  method: "GET",
};
function callbackFn(response) {
  console.clear();
  console.log("Inside the callback : " + response[1].username);
}
Fetch("https://sample_fetch.com/group/data", obj).then(callbackFn);
// user part is to handle the .then() part and see what the main_func is returning
// and use that return value in the callback function
