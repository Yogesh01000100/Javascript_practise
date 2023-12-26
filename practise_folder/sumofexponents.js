function square(var1, var2) {
    return (var1 * var1) + (var2 * var2);
}

function cube(var1, var2) {
    return (var1 * var1 * var1) + (var2 * var2 * var2);
}

function HOF(cb, param1, param2) {
    let sum = cb(param1, param2);
    console.log(sum);
}

HOF(cube, 2, 3);
