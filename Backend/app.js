//cookie read krne k liye
const cookieParser = require("cookie-parser");

const express = require("express");
const app = express();

const bcrypt = require("bcrypt");

app.use(cookieParser());
let saltRounds = 10;
let myPlaintextPassword = "hellohiru";
app.get("/", (req, res) => {
  // res.cookie("name", "harry");
  // res.send("hello done");

  bcrypt.genSalt(saltRounds, function (err, salt) {
    // salt = random string
    bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
      // Store hash in your password DB.
      console.log(hash);
      // password encrypted
    });
  });
});

app.get("/check", (req, res) => {
  bcrypt.compare(
    myPlaintextPassword,
    "$2b$10$Q2Mq5y6aSarP7SajgB0Ggul3okbqXn2U24Q4nXRKZa62GzBXwMUf.",
    function (err, result) {
      // result == true
      console.log(result);
    }
  );
  res.status(200).json({
    success: true,
    message: 'user registered successfully'
  })
});
// app.get('/read', (req, res)=>{
//   console.log(req.cookies);
//   res.send("read page !");
// })

app.listen(3000);
