import React from 'react';
import TodoItem from "./TodoItem";
import DoneItem from "./DoneItem";

const DoneToDo = ({done, add,removeDone}) => {
    return (
        <div>
            <h1 className="header">
                Выполненные задачи
            </h1>
            {done.map((toDo, index) =>
                <DoneItem

                    toDo={toDo}
                    key={toDo.id}
                    number={index + 1}
                />
            )}
        </div>
    );
};

export default DoneToDo;