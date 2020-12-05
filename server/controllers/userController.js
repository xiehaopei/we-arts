const User = require('../models/user.js');

const getUserList = async (req, res) => {
  try {
    const result = await User.find();
    res.send(result)
  } catch (error) {
    throw new Error(error)
  }
}

const addUser = async (req, res) => {
  const params = {
    username: req.body.username,
    password: req.body.password,
    authority: req.body.authority
  }
  try {
    const user = new User(params);
    const result = await user.save();
    res.send(result)
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { getUserList, addUser }