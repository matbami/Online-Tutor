const express = require("express");

const userRouter = require("./src/Routers/User");
const subjectRouter = require("./src/Routers/subject");
const categoryRouter = require("./src/Routers/category");
const lessonRouter = require("./src/Routers/lessons");
const tutorRouter = require("./src/Routers/tutor");

require("./src/db/mongoose.js");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(subjectRouter);
app.use(categoryRouter);
app.use(lessonRouter);
app.use(tutorRouter);

app.listen(port, () => {
  console.log("Server is up and running on port " + port);
});
