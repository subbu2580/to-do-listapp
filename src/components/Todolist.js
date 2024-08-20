import { useState } from "react";

let Todolist = () => {
    const [tasks, settasks] = useState(["name", "subbu"]);
    const [newTask, setnewTask] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    let AddTask = () => {
        if (newTask.trim() !== "") {
            if (editIndex !== null) {
                const updatedTasks = tasks.map((task, i) => i === editIndex ? newTask : task);
                settasks(updatedTasks);
                setEditIndex(null); 
            } else {
                settasks([...tasks, newTask]);
            }
            setnewTask("");
        }
    };

    let DeleteTask = (index) => {
        settasks(tasks.filter((_, i) => i !== index));
    };

    let StartEditing = (index) => {
        setEditIndex(index);
        setnewTask(tasks[index]); 
    };

    return (
        <div className="to-do-list">
            <h1>To-do-list</h1>
            <div>
                <input
                    type="text"
                    placeholder="enter your task"
                    value={newTask}
                    onChange={(event) => setnewTask(event.target.value)}
                />
                <button
                    className="add-button"
                    onClick={AddTask}
                >
                    {editIndex !== null ? "Update" : "ADD"}
                </button>
            </div>
            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                            className="edit-button"
                            onClick={() => StartEditing(index)}
                        >
                            Edit
                        </button>
                        <button
                            className="delete-button"
                            onClick={() => DeleteTask(index)}
                        >
                            Delete
                        </button>
                    </li>
                )}
            </ol>
        </div>
    );
};

export default Todolist;

