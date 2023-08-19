import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { registerApi } from "../service/api";
import BoilerPlateCode from "./BoilerPlateCode";
function Signup() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
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
    e.preventDefault();
    const user = {
      userName: userName,
      password: password,
      confirmPassword: confPassword,
    };
    console.log(user);
    registerApi(user).then((res) => {
      if (res.data.success) {
        console.log(res.data);
        navigate("/login");
      }
    }).catch((res)=>{
        settost({
            data:res.data.message,
            success:false,
            open:true
           })
    });
  };
  const setToastClosed=()=>{
    settost(initial)
  }
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Card sx={{ maxWidth: 400, marginTop: "10rem" }}>
        <Avatar
          sx={{
            width: 100,
            height: 100,
            bgcolor: "primary.main",
            marginX: "auto",
          }}
        ></Avatar>
        <Typography component="h1" variant="h5" textAlign="center">
          Register
        </Typography>
        <p style={{ color: "red" }}>{error}</p>
        <CardContent>
          <Box
            component=""
            sx={{
              "& .MuiTextField-root": {
                display: "flex",
                justifyContent: "center",
                width: "35ch",
              },
            }}
          >
            <TextField
              label="UserName"
              id="outlined-size-small"
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
            <TextField
              id="outlined-password-input"
              label="Confirm Password"
              type="password"
              margin="dense"
              autoComplete="current-password"
              onChange={(e) => setConfPassword(e.target.value)}
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
              <Link style={{ color: "black" }} to="/login">
                Login
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <BoilerPlateCode
        success={tost.success}
        open={tost.open}
        data={tost.data}
        setToastClosed={setToastClosed}
      />
    </Grid>
  );
}

export default Signup;
