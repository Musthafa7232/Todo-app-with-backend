import { config } from "dotenv";
import express from "express";
import connectDB from './dbConfig.js'
import todoRouter from "./router/todoRouter.js";
import cors from "cors";
const app = express();
config();
app.use(cors());
app.use(express.json());
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));

app.use("/api", todoRouter);

const port = process.env.PORT;

let server;
connectDB().then(()=>{
    server = app.listen(port, () => {
    console.log(`Server Listening on port ${port}`);
  });
})
  

