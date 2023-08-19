import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();
export const createUserToken = (user) => {
try {
     const payload = {
      id: user._id,
      name: user.userName,
    };
    const token = jwt.sign(payload, process.env.SECRET_KEY_USER);
    return token;
} catch (error) {
  console.log(error)
  throw new Error('failed to authenticate')
}
 

};

export const verifyUserToken = (req,res,next) => {
  const Token=req.header('auth-token');
  console.log(Token);
  if(!Token) return res.status(401).send('Access denied')
  
  try{
  const verified=jwt.verify(Token,process.env.SECRET_KEY_USER)
  req.user=verified
  next()
  }catch(err){
    console.log(err);
    res.status(400).send('Invalid Token')
};
}