import React from "react"

import AddTaskForm from './components/AddTaskForm'
import ToDoList from './components/ToDoList'

function App() {
    return (
        <div>
            <h1>To Do List</h1>
            <AddTaskForm />
            <ToDoList/>
        </div>
    )
}

export default App;