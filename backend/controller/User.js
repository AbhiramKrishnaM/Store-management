/** Auth controller */

exports.registerUser = (req, res) => {
  res.send("User registration end");
};

exports.loginUser = (req, res) => {
  res.send("User login end");
};

exports.updateUser = (req, res) => {
  res.send("User details update end");
};

exports.dropUser = (req, res) => {
  res.send("Sad to see you go!");
};
