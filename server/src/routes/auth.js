import express from "express";

import { signIn, signUp } from "../controllers/auth.js";

const Router = express.Router();

//Router.post('/signin');
Router.post("/signup", signUp);
Router.post("/signin", signIn);

export default Router;
