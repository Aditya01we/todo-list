import React, { useState } from "react";
import TaskForm from "./components/Taskform";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Add new task
  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <h1>📝 To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
