import './styles/main.scss'

import React from "react"
import ReactDOM from "react-dom"

import AddTaskForm from './components/AddTaskForm'
import ToDoList from './components/ToDoList'

import "./index.html"

function App() {
    return (
        <div>
            <h1>To Do List</h1>
            <AddTaskForm />
            <ToDoList/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("app"))