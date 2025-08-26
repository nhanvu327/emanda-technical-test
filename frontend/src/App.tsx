import React, { useState } from "react";
import { TaskProvider, useTasks } from "./context/TaskContext";
import { TaskList } from "./components/TaskList";
import CreateTask from "./components/CreateTask";

const Main = () => {
  return (
    <div>
      <h1>Task Manager</h1>
      <CreateTask />
      <TaskList />
    </div>
  );
};

const App = () => (
  <TaskProvider>
    <Main />
  </TaskProvider>
);

export default App;
