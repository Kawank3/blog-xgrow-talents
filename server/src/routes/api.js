import express from "express";

import auth from "./auth.js";
import post from "./post.js";
import user from "./user.js";

const Router = express.Router();

Router.use("/auth", auth);
Router.use("/post", post);
Router.use("/user", user);

export default Router;
