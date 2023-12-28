const express = require("express");
const bodyParser=require("body-parser");
const app = express();
const port = 3000;


app.use(middleware)
app.use(bodyParser.json())
let count=0;
function middleware(req,res,next)
{
  console.log("MIDDLEWARE LOGGED: !",count);
  count=count+1;
  next()
}
function calculateSum(counter) {
  let sum = 0;
  for (let i = 0; i <= counter; i++) {
    sum = sum + i;
  }
  //return {"sum" : sum};
  return JSON.stringify(sum)
}

function firstRoute(req, res) {
  console.log("body : ",req.body)
  const request = req.query.counter;
  console.log(calculateSum(request));
  res.send("RESPONSE FROM SERVER : "+calculateSum(request));
}

app.get("/test", firstRoute); // in get implementation it must be passing some parameters to firstRoute

app.get("/get",(req,res)=>{
    res.send("Hello world !")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
