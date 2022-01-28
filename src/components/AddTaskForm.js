import React from "react";

// Add new Task form
function AddTaskForm() {
    return (
        <div>
            <form>
                <input type="text" name="task" placeholder="Add new task" /> <br />
                <input type="submit" value="Add Task" />
            </form>
        </div>
    );
}

export default AddTaskForm;
