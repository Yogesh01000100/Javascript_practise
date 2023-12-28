function myGetFunction(val,cb)
{
    let setter_val=21;
    let err="ERROR!"
    cb(setter_val, err);
    console.log(val)
}

myGetFunction("/get",(data,err)=>{
    console.log("From the get Callback : ",data,err)
})