import React from "react";

function handleForm(){
    console.log("Form submitted");
}

// Add new Task form
function AddTaskForm() {
    return (
        <div>
            <form onSubmit={handleForm()}>
                <input type="text" name="task" id="my_task" placeholder="Add new task" /> <br />
                <input type="submit" value="Add Task" />
            </form>
        </div>
    );
}

export default AddTaskForm;
