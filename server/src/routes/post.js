import express from "express";
import validateToken from "../middlewares/validateToken.js";
import {
  create,
  getAllPosts,
  getPostById,
  update,
} from "../controllers/post.js";

const Router = express.Router();

Router.get("/", getAllPosts);
Router.get("/:id", getPostById);
Router.post("/", validateToken, create);
Router.put("/", validateToken, update);
Router.delete("/", validateToken);

export default Router;
