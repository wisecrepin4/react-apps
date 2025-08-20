import React, { useState } from "react";
export default function Todolist() {
  const [tasks, setTasks] = useState([
    "Wake up",
    "Build the App",
    "send the account for payment",
  ]);
  const [newTask, setNewTask] = useState("");
  function handleDeleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function handleTaskInput(e) {
    setNewTask(e.target.value);
  }

  function addnewTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  function handleMoveUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];

      [updatedTasks[index - 1], updatedTasks[index]] = [
        updatedTasks[index],
        updatedTasks[index - 1],
      ];
      setTasks(updatedTasks);
    }
  }
  function handleMoveDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];

      [updatedTasks[index + 1], updatedTasks[index]] = [
        updatedTasks[index],
        updatedTasks[index + 1],
      ];
      setTasks(updatedTasks);
    }
  }
  return (
    <div className="toDoList">
      <h1>To-Do-List</h1>
      <input
        className="tdin"
        type="text"
        onChange={handleTaskInput}
        value={newTask}
        placeholder="Enter task..."
      />
      <button className="add" onClick={addnewTask}>
        Add
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete" onClick={() => handleDeleteTask(index)}>
              Delete
            </button>
            <button className="up" onClick={() => handleMoveUp(index)}>
              👆
            </button>
            <button className="dn" onClick={() => handleMoveDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
