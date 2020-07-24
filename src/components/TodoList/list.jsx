import React from "react";
import TodoItem from '../TodoItem'
import './index.css'

function TodoList(props) {

    const {todo, changeTodoStatus, deleteTodo, closeEdit, show, openEdit, editedElement} = props

    // const _changeTodoStatus = (check) => {
    //     changeTodoStatus(el, check)
    // }


return (
    <div>
        <section className="main">
        <ul className="todo-list">
            {todo.map((el) => (
               <TodoItem
                   el={el}
                   key={el.id}
                   changeTodoStatus={changeTodoStatus}
                   deleteTodo={deleteTodo}
                   closeEdit={closeEdit}
                   show={show}
                   openEdit={openEdit}
                   editedElement={editedElement}

               />
            ))}
        </ul>
            </section>
    </div>
)}

export default TodoList