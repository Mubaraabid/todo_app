import todoModel from "../model/todo.js";

const todoController={
    getAll: (req,res)=>{
        const todo=todoModel.getAll();
        {
            return res.json(todo);
        };
    },
};

export default todoController;