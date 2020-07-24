import React, {useRef, useState, useEffect} from 'react';
import Input from "./components/Input/input";
import Button from "./components/Button/button";
import TodoList from "./components/TodoList/list";
import Checkbox from "./components/Checkbox";
import './index.css';
import './App.css'
function App() {

const inputCb = (event) => setValue(event.target.value);

    const counters = useRef({ all: 0, active: 0, done: 0 });

    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState("");
    const [activeTab, setActiveTab] = useState("All");
    const [checkAll, setCheckAll] = useState(false)
    const [show, setShow] = useState(false)
    const [editedElement, setEditedElement] = useState('')

  const addValue = () => {
    if (value.length) {
        const _todo = [...todos , { status: false, id: Math.random(), title: value}]
        setTodos(_todo)
        setValue('')
        count(_todo);
    }
  }
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addValue();
        }
    };


    // Count
    const count = (_todo = todos) => {
        const active = _todo.filter((item) => !item.status).length;
        const all = _todo.length;
        counters.current.all = all;
        counters.current.active = active;
        counters.current.done = all - active;
    };


    // Изменение одного статуса

    const changeTodoStatus = (elem, check) => {
        const checked = check.target.checked;
        const changeOne = todos.map((item) =>
            item.id === elem.id ? { ...item, status: checked } : item
        );
        setTodos(changeOne);
        count(changeOne);

    };


    // Change all status

    const changeAllTodoStatus = (e) => {
        const checked = e.target.checked
        const changeAll = todos.map((item) => ({ ...item, status: checked }))
        setTodos(changeAll)
        setCheckAll(checked)
        count(changeAll)
    }

    // Seacrh status

    useEffect(() => {
        let validate = todos.length && todos.every((item) => item.status)
        setCheckAll(validate)
    }, [todos, value])


    // Удаление Todo

    const deleteTodo = (id) => {
        const filteredTodo = todos.filter((elem) => elem.id !== id);
        setTodos(filteredTodo);
        count(filteredTodo)
    };
    // Удаление выполненых Todo

    const deleteAllTodo = () => {
        const filteredAllTodo = todos.filter((elem) => elem.status !== true)
        setTodos(filteredAllTodo);
        count(filteredAllTodo)
    };


    // Active tab

    const getList = () => {
        return activeTab === 'Active' || activeTab === 'Complete'
            ? todos.filter(el => activeTab === 'Complete' ? el.status : !el.status) : todos;
    }

    // Tabs

    const Tabs = (e) => {
        setActiveTab(e)
        console.log(activeTab)
    }


    // Edit
    const openEdit = (el) => {
        setEditedElement(el)
        setShow(true)
    }
    const closeEdit = (id, value) => {
        setTodos(todos.map((item) => (item.id === id ? { ...item, title: value } : item)))
        setShow(false)
    }


  return (
      <div onKeyDown={handleKeyDown} className="todoapp">

          <header>
              <h1>todos</h1>
              <Checkbox
                  id="toggle-all"
                  className="toggle-all"
                  checked={checkAll}
                  onChange={changeAllTodoStatus}
              />
              <label htmlFor="toggle-all"></label>

              <Input
                  value={value}
                  handler={inputCb}
                  className="new-todo"
              />
              <Button onClick={addValue} nameButton='Add' className="btnAdd"/>
          </header>

        <TodoList
            todo={getList()}
            changeTodoStatus={changeTodoStatus}
            deleteTodo={deleteTodo}
            closeEdit={closeEdit}
            show={show}
            openEdit={openEdit}

            editedElement={editedElement}
        />

          <footer className='footer'>
        <ul className="filters">
            <Button onClick={() => Tabs('All')} nameButton={`All (${counters.current.all})`}/>
            <Button onClick={() => Tabs('Active')} nameButton={`Active (${counters.current.active})`}/>
            <Button onClick={() => Tabs('Complete')} nameButton={`Complete (${counters.current.done})`}/>
        </ul>

      <Button className="btnClear" onClick={deleteAllTodo} nameButton='Clear completed'/>
          </footer>
      </div>
  )

}

export default App;
