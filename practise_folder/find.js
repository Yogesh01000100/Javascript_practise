let arr = ["admin"];

function callBackFn(element) {
    if (element === "admin") {
        return true; 
    }
}

let foundElement = arr.find(callBackFn);

console.log(foundElement);
