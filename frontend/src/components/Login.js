import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Avatar,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginApi } from "../service/api";
import { Auth_user } from "../features/AuthSlice";
import { SetUserData } from "../features/userSlice";
import BoilerPlateCode from "./BoilerPlateCode";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [tost, settost] = useState({});
  const initial = {
    open: false,
    success: false,
    data: "",
  };
  useEffect(() => {
    settost(initial);
  }, []);
  const submitHandler = (e) => {
    const user = {
      userName: userName,
      password: password,
    };
    console.log(user);
    loginApi(user).then((res) => {
      if (res.data.success) {
        console.log(res.data);
        localStorage.setItem(
          "authorization.user",
          JSON.stringify(res.data.token)
        );
        dispatch(SetUserData(res.data.user));
        dispatch(Auth_user());

        navigate("/");
      } else if (res.data.error) {
        setError(res.data.error);
      }
    }).catch((res)=>{
        console.log(res);
        settost({
            data:res.data.message,
            success:false,
            open:true
           })
    });;
  };
  const setToastClosed=()=>{
    settost(initial)
  }
  return (
    <div className="">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Card sx={{ maxWidth: 345, marginTop: "10rem" }}>
          <Avatar
            sx={{
              m: 2,
              width: 100,
              height: 100,
              bgcolor: "success.main",
              marginX: "auto",
            }}
          ></Avatar>
          <Typography
            component="h1"
            variant="h5"
            sx={{
              textAlign: "center",
            }}
          >
            Login
          </Typography>
          <p style={{ color: "red" }}>{error}</p>
          <CardContent>
            <Box
              component=""
              sx={{
                "& .MuiTextField-root": { m: 1, width: "35ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-password-input"
                label="Username"
                type="text"
                margin="dense"
                onChange={(e) => setUserName(e.target.value)}
              />

              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                margin="dense"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="outlined"
                  color="success"
                  type="submit"
                  onClick={submitHandler}
                >
                  Submit
                </Button>
              </Box>
              <Typography
                sx={{ display: "block", textAlign: "center", mt: 2 }}
                variant="p"
                gutterBottom
              >
                Already Have an Account?
                <Link style={{ color: "black" }} to="/register">
                  Register
                </Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <BoilerPlateCode
        success={tost.success}
        open={tost.open}
        data={tost.data}
        setToastClosed={setToastClosed}
      />
    </div>
  );
}

export default Login;
