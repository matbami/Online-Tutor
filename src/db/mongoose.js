const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Onlinetutor", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
// .then((result) => {
//   console.log("Database connected");
//   // app.listen(3000);
// })
// .catch((err) => {
//   console.log(err);
// });
