let arr=[1,2,3,4,5,6,7]

function transform(val)
{
    return val*2
}

const value=arr.map(transform)
console.log(value)


/* second approach */
const second_value=arr.map((val)=>{
    console.log("input value : ",val)
    return val*3;
})

console.log(second_value)


/* my own map function */

function myOwnMapFunction(arr, callbackFn) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const newValue = callbackFn(arr[i]);
        result.push(newValue);
    }

    return result;
}

const _value = myOwnMapFunction(arr, (val) => {
    return val * 3;
});
console.log(" Own Function output : ",_value)

