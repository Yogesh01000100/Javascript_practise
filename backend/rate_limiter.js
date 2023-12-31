const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3001;

let rateLimiter = {};

function middleware(req, res, next) {
  if (req.headers["username"]) {
    const username = req.headers["username"];
    const currentTime = Date.now();
    
    if (!rateLimiter[username]) {
      rateLimiter[username] = { count: 0, lastRequestTime: currentTime };
    } // initializing the ratelimiter object
    console.log(rateLimiter)
    if (
      rateLimiter[username].count > 1 &&
      currentTime - rateLimiter[username].lastRequestTime < 1000
    ) {
      return res.status(429).json({ msg: "Rate limit exceeded!" });
    } // for rate limit checking

    if (currentTime - rateLimiter[username].lastRequestTime >= 1000) {
      rateLimiter[username] = { count: 1, lastRequestTime: currentTime };
    } else {
      rateLimiter[username].count++;
    }
  }
  next();
}

app.use(bodyParser.json());
app.use(middleware);

const userData = [
  {
    userId: "qwkj23",
    username: "Yogesh",
    data: { login_device: "Windows_10_X", last_Login: "21-10-2001" },
  },
  {
    userId: "2rd32r",
    username: "Rahul",
    data: { login_device: "Ubuntu 22_x", last_Login: "21-10-2002" },
  },
];

const animalData = [
  {
    id: 101,
    name: "Lion",
    habitat: "Grasslands",
    sound: "Roar",
  },
  {
    id: 102,
    name: "Elephant",
    habitat: "Jungles",
    sound: "Trumpet",
  },
];

app.get("/data", (req, res) => {
  const userName = req.headers["username"];
  const foundUser = userData.some((element) => element.username === userName);

  if (foundUser) {
    res.status(200).json({ data: animalData });
  } else {
    res.status(404).json({ msg: "user not found!" });
  }
});

app.listen(port, () => {
  console.log("server running on port : ", port);
});
