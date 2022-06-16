import React, {useState} from 'react';
import {Checkbox} from "@mui/material";

const TodoItem = (props) => {

    const handleChange = () => {
        props.toDo.active = !props.toDo.active
    }


    return (
        <div className="toDo">
            <Checkbox onChange={handleChange} checked={props.toDo.active} onClick={props.toDo.active ? ()=> props.removeDone(props.toDo) : ()=> props.add(props.toDo) }/>
            <div className={props.toDo.active ? "strike" : "toDo__content"}>
                {props.number}. {props.toDo.body}
            </div>
            <button className="toDo__btn" onClick={() => props.remove(props.toDo)}>Удалить</button>
        </div>
    );
};

export default TodoItem;