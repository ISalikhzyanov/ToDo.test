import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";

const TodoForm = ({create}) => {
    const [toDo,setToDo] = useState({body:''});
    const addNewToDo = (e)=>{
        e.preventDefault()
        const newTodo = {
            ...toDo, id: Date.now(), active: false
        }
        create(newTodo)
        setToDo({body: ''})
    }
    return (
        <div>
            <form className="add">
                <TextField
                value={toDo.body}
                onChange={e=>setToDo({...toDo, body: e.target.value})}
                    label="Название задачи"
                    color="primary"
                    focused />
                <Button variant="contained" style={{marginLeft: 10}} onClick={addNewToDo}>Добавить</Button>
            </form>

        </div>
    );
};

export default TodoForm;