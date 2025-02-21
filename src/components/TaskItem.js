import React from "react";
import "./TaskItem.css";

const TaskItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <span onClick={() => toggleTask(task.id)}>{task.text}</span>
      <button className="delete-btn" onClick={() => deleteTask(task.id)}>❌</button>
    </div>
  );
};

export default TaskItem;
