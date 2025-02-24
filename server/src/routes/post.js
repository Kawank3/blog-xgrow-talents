import express from "express";
import validateToken from "../middlewares/validateToken.js";
import {
  Create,
  Read,
  Update,
  Delete
} from "../controllers/post.js";

const Router = express.Router();

Router.get("/", Read);
Router.post("/", validateToken, Create);
Router.put("/", validateToken, Update);
Router.delete("/", validateToken, Delete);

export default Router;
