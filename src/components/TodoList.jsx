import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({toDoes, remove, add, change,check,removeDone}) => {
    return (
        <div>

            <h1 className="header">
                Список задач
            </h1>
            {toDoes.map((toDo, index) =>
                <TodoItem
                    removeDone={removeDone}
                    check={check}
                    change={change}
                    add={add}
                    remove={remove}
                    toDo={toDo}
                    key={toDo.id}
                    number={index + 1}
                />
            )}
        </div>
    );
};

export default TodoList;