function secondCallBack(jsonBody) {
  console.log("Fetch call : " + jsonBody);
}

function callBack(response) {
  response.json().then(secondCallBack);
}

fetch("http://localhost:3000/test?counter=2", { method: "GET" }).then(callBack); // adding a second process that runs on a different thread that talks with the backend
// server code runs on a different thread and we are talking to this server
