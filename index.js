const express = require("express");
const app = express();

const { UserRouter } = require("./Routes/user.router.js");
const { InitRouter } = require("./Routes/init.sequelize.router.js");
const { AuthRouter } = require("./Routes/auth.router.js");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Accept, Accept-Language, X-Authorization, X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});

app.use(express.json({ limit: "1mb" }));

app.use(UserRouter);
app.use(AuthRouter);
app.use(InitRouter);

app.listen(4200, () => {
  console.log(`Running on port 4200`);
});

module.exports = { app };
