import React, { useState } from "react";
import "./Taskform.css";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;
