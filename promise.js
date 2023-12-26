// Actual implementation of promisified function

function getPromise() { // assume a time taking function like a network request
  return new Promise((res) => {
    res("Promise resolved!");
  });
}

function callBack(data) {
    console.log("data : ",data);
}
getPromise().then(callBack);