import express from "express";
import login from "../login/user.login";
import register from "../register/user.register";
import logout from "../logout/user.logout";

const app = express();

app.use("/login" , login );
app.use("/register" , register);
app.use("/logout" , logout);

export default app;
