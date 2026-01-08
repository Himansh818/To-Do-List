const cookieParser = require("cookie-parser");
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cookieParser());

app.get("/", (req, res) => {
  const token = jwt.sign(
    { email: "hiraastrophile888@gmail.com" },
     "secret"  // it should be very secret
  );
  console.log(token);
  res.send(" process done ");
});

app.listen(3000)
