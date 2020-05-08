const express = require("express");

const userRouter = require("./src/Routers/User");
const subjectRouter = require("./src/Routers/subject");

require("./src/db/mongoose.js");

const app = express();

const port = 3000;

app.use(express.json());
app.use(userRouter);
app.use(subjectRouter);

app.listen(port, () => {
  console.log("Server is up and running on port " + port);
});
