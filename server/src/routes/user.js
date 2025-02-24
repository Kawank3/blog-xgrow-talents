import express from "express";

import validateToken from "../middlewares/validateToken.js";
import validateAdmin from "../middlewares/validateAdmin.js";

import { Read, Update, Delete } from "../controllers/user.js";

const Router = express.Router();

Router.get('/', validateToken, validateAdmin, Read);
Router.put('/', validateToken, validateAdmin, Update);
Router.delete('/', validateToken, validateAdmin, Delete);

export default Router;
