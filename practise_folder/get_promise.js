function myGetFunction(val,cb)
{
    let setter_val=21;
    cb(setter_val);
    console.log(val)
}

myGetFunction("/get",(data)=>{
    console.log("From the get Callback : ",data)
})