let arr=[1,2,3,4]

function callBackFn(Arr)
{
    let newArr=[]
    for(let i=0;i<Arr.length;i++)
    {
        newArr.push(Arr[i]+1)
    }
    return newArr
}

function mapArray(arr,callBack)
{
    let modifiedValues=callBack(arr)
    return modifiedValues
}


let response=mapArray(arr,callBackFn)
console.log("Response : ",response)