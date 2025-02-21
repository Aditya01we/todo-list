import React from "react";
import TaskItem from "./TaskItem";
import "./TaskList.css";

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks added yet!</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
        ))
      )}
    </div>
  );
};

export default TaskList;
