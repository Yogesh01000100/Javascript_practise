function square(var1, var2) {
    return (var1 * var1) + (var2 * var2);
}

function cube(var1, var2) {
    return (var1 * var1 * var1) + (var2 * var2 * var2);
}

function HOF(param1, param2, cb) { // black box function
    let sum = cb(param1, param2);
    console.log(sum);
}

HOF(2, 3, cube);

// other way round, similar to readfile
HOF(1,2,function(var1,var2){
    return (var1 * var1) + (var2 * var2);
})