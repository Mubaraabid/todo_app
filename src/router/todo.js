import {Router} from "express";
import todoController from "../controller/todo.js";

const todoRouter=new Router();
todoRouter.get("/mytodo", todoController.getAll);
export default todoRouter;
