import mongoose from "mongoose";
import userModel from "../model/userModel.js";

export const userData = async (req, res) => {
  try {
    console.log('yo dude');
    const user = await userModel.findById(req.user.id);
    console.log(user);
    res.json({success:true,user})
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "please try again later" });
  }
};

export const createNewTodo = async (req, res) => {
  try {
    const { newTodo } = req.body;
    const user = await userModel.findByIdAndUpdate(
      req.user.id,
      {
        $push: {
          todos: {
            todo: newTodo,
          },
        },
      },
      { new: true }
    );

    res.json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Failed to create new todo" });
  }
};

export const checkOrunchecktodo = async (req, res) => {
  try { 
    console.log('ethi mwonee');
    const { id,checked } = req.body;
   
    const user = await userModel.findOneAndUpdate(
      { _id: req.user.id, "todos._id": id },
      {
        $set: {
          "todos.$.checked":checked ,
        },
      },
      { new: true }
    );
    
    console.log(user);
    res.json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "please try again later" });
  }
};
export const deleteTodo = async (req, res) => {
  try {
    console.log('vannu njn');
    const { id } = req.body;
    const user = await userModel.findOneAndUpdate(
      { _id: req.user.id, "todos._id": id },
      {
        $set: {
          "todos.$.isDeleted": true,
        },
      },
      { new: true } 
    );
    
    console.log(user);
    res.json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "please try again later" });
  }
};
