const express = require("express");

const userRouter = require("./src/Routers/User");

require("./src/db/mongoose.js");

const app = express();

const port = 3000;

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
  console.log("Server is up and running on port " + port);
});
