import React from 'react';
import {Checkbox} from "@mui/material";

const DoneItem = (props) => {
    return (
        <div className="done">
            <Checkbox checked={true}/>
            <div className="done-component">
                {props.number}. {props.toDo.body}
            </div>


        </div>
    );
};

export default DoneItem;