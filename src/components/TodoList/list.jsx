import React from "react";
import Button from "../Button/button";
import Checkbox from "../Checkbox";

function TodoList(props) {

    const {todo, changeTodoStatus, deleteTodo} = props

    // const _changeTodoStatus = (check) => {
    //     changeTodoStatus(el, check)
    // }


return (
    <div>
        <ul>
            {todo.map((el) => (
                <li key={el.id}>
                    <Checkbox checked={el.status} onChange={check => changeTodoStatus(el, check)}/>
                {el.title}
                <Button
                    onClick={() => deleteTodo(el.id)}
                    nameButton='X'/>
                </li>
            ))}
        </ul>
    </div>
)}

export default TodoList