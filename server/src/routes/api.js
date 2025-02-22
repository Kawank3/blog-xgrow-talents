import express from "express";

import auth from "./auth.js";
import post from "./post.js";

const Router = express.Router();

Router.use("/auth", auth);
Router.use("/post", post);

export default Router;
