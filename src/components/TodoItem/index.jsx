import React, { useState } from 'react'
import Button from '../Button/button'
import Checkbox from '../Checkbox'
import Input from '../Input/input'
import './index.css'

// import './index.css'

const TodoItem = ({
                      el,
                      deleteTodo,
                      changeTodoStatus,
                      openEdit,
                      closeEdit,
                      show,
                      editedElement
                  }) => {
    const [editValue, setEditValue] = useState(el.title)





    const editInputCb = (event) => setEditValue(event.target.value)

    const _openEdit = () => {
        openEdit(el)
    }
    const _deleteTodo = () => {
        deleteTodo(el.id)
    }
    const _changeTodoStatus = (check) => {
        changeTodoStatus(el, check)
    }

    const getBlur = () => {
        closeEdit(el.id, editValue)
    }

    const enterKeyDown = (e) => {
        if (e.key === 'Enter') closeEdit(el.id, editValue)
    }
    return show && el.id === editedElement.id ? (
        <li onKeyDown={enterKeyDown}>
            <Input className="edit" value={editValue} handler={editInputCb} getBlur={getBlur}/>
        </li>
    ) : (
        <li key={el.id}>
            <Checkbox className="toggle" checked={el.done} onChange={_changeTodoStatus} />
            <span className="todo-title" onDoubleClick={_openEdit}>
        {el.title}
      </span>
            <Button className="destroy" nameBtn="" onClick={_deleteTodo} />
        </li>
    )
}
export default TodoItem