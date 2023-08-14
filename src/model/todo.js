
const todoList = []; 

const todoModel={
    getAll: () => {
    return todoList;
        },

    createTodo: (newTodo) => {
    todoList.push(newTodo);
    },

    findid:(unid)=>{
       const index= todoList.findIndex(todoList => todoList.id == unid);
       return index;
    },

    delete: (inde)=>{
        todoList.splice(inde, 1);
    },

    todoid: (id)=>{
        const isid=todoList.findIndex(todoList=>todoList.id==id);
        return isid;
    },

    gettodoiddata: (todoid)=>{
        const iddata=todoList[todoid];
        return iddata;
    },
    findidd:(unid)=>{
        const index= todoList.findIndex(todoList => todoList.id == unid);
        return index+1;
     },

};
export default todoModel;
