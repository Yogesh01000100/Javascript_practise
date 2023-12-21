function secondCallBack(jsonBody) {
  console.log("Fetch call : " + jsonBody);
}

function callBack(response) {
  response.json().then(secondCallBack);
}

fetch("http://localhost:3000/test?counter=2", { method: "GET" }).then(callBack);
