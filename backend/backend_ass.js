const bodyParser = require("body-parser");
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const port = 3000;

app.use(bodyParser.json());

const user_Data = [
  {
    userId: "s21Q",
    username: "Yugeena",
    password: "123",
  },
  {
    userId: "W21e",
    username: "Rahul",
    password: "123",
  },
];

const validate_user = (usr_name, usr_password) => {
  const user = user_Data.find(
    (element) =>
      element.password === usr_password && element.username === usr_name
  );
  // If a matching user is found, return true; otherwise, return false.
  return !!user;
};

app.post("/user-login", (req, res) => {
  const username = req.headers["username"];
  const password = req.headers["password"];

  if (!validate_user(username, password)) {
    return res.status(411).json({ msg: "User not found!" });
  }

  const token = jwt.sign({ username: username }, "secret");
  return res.status(200).json({ token });
});

app.get("/get-users", (req, res) => {
    const token = req.headers.authorization.trim();
    console.log("Received Token: ", token);
    
  console.log("Received Token: ", token);
  try {
    const decoded_token = jwt.verify(token, "secret");
    console.log("Decoded token : ", decoded_token);
    const user_name = decoded_token.username;

    const userExists = user_Data.some(
      (element) => element.username === user_name
    );

    if (userExists) {
      res.status(200).json({ userData: user_Data });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    res.status(401).json({ message: "Unauthorized" });
  }
});

app.listen(port, () => {
  console.log("App listening on port : ", port);
});
