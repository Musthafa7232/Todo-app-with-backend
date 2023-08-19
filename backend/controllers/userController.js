import userModel from "../model/userModel.js";
import {createUserToken} from '../utils/jwt.js'
export const signUp = async (req, res) => {
  try {
    const { userName, password, confirmPassword } = req.body;
console.log('inhere');
    const user = await userModel.findOne({ userName });
    if (user) {
      res.status(401).json({ message: "Username already exist" });
    } else if (password !== confirmPassword) {
      res.status(401).json({ message: "Password is incorrect" });
    } else if (password.length < 4) {
      res
        .status(401)
        .json({ message: "Password should be at least 4 letters" });
    } else {
      const newUser = new userModel({
        userName,
        password,
      });
      await newUser.save();
      res.json({ success: true });
    }
  } catch (err) {
    console.log(err);
    res
      .status(401)
      .json({ message: "cannot create user please try again later" });
  }
};

export const signIn = async (req, res) => {
  try {
    const { userName, password } = req.body;
    console.log('hey');
    const user = await userModel.findOne({ userName });
    if (!user) {
      res.status(401).json({ message: "user doest exist" });
    } else {
      if (user.password !== password) {
        res.status(401).json({ message: "Incorrect Password" });
      } else {
        const token= createUserToken(user)
        console.log(user);
        res.json({ success: true, token ,user});
      }
    }
  } catch (error) {
    console.log(error);
    res
      .status(401)
      .json({ message: "please try again later" });
  }
};

