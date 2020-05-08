const jwt = require("jsonwebtoken");
const User = require("../Models/User");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "adeleke");
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "please authenticate" });
  }
};

const auth2 = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "adeleke");
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (user.role != "admin") {
      throw new Error();
    }
    // req.token = token;
    // req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "permission denied" });
  }
};

module.exports = { auth, auth2 };
