import express from "express";
import todoRouter from "./router/todo.js";
import bodyParser from "body-parser";
import todoModel from './model/todo.js';

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(todoRouter);

app.listen(3800,()=>{
    console.log("listening on port 3800");
})

app.get('/todoid/:id',(req,res)=>{
    const id=req.params.id;
    const todoid= todoModel.todoid(id);
    res.json(todoModel.gettodoiddata(todoid));
})


app.post('/todoupdate/:id',(req,res)=>{
    const reqid=req.params.id;
    const title=req.body.title;
    const description=req.body.description;
    const completed=req.body.completed;

    const id= todoModel.findidd(reqid);
    if (id !== -1)
    {
        const updatetodo = {
            id: id,
            title,
            description,
            completed
        };
        
        todoModel.createTodo(updatetodo);
        todoModel.delete(id);
        res.status(201).json(updatetodo);
    }

})



app.get('/tododelete',(req,res)=>{
    const unid=req.query.id;
    // res.json(unid);
    const index= todoModel.findid(unid);
    // res.json(index);
    if (index !== -1)
    {
        // res.json({ message: 'Todo deleted successfully' });
        todoModel.delete(index);
        res.json({ message: 'Todo item delete' });
    } 
    else {
             res.status(404).json({ message: 'not found' });
         }
    

})


app.post('/todopost', (req, res) => {
    const title=req.body.title;
    const description=req.body.description;
    const newTodo = {
        id: todoModel.getAll().length + 1,
        title,
        description,
        completed: false
    };

    todoModel.createTodo(newTodo); 
    res.status(201).json(newTodo);
});


app.get('/todolist', (req,res)=>{
   return res.json(todoModel.getAll());
})
