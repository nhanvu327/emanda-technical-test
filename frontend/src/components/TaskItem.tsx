import React, { useState, useMemo } from "react";
import { Task } from "../types";
import CreateTask from "./CreateTask";

export const TaskItem: React.ReactNode = ({ task }: { task: Task }) => {
  const [showSubtasks, setShowSubtasks] = useState(false);
  const [isCreatingSubTask, setIsCreatingSubTask] = useState(false);
  const hasSubTasks = useMemo(
    () => task.subtasks && task.subtasks.length > 0,
    [task]
  );

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "0.75rem",
        margin: "0.5rem 0",
        backgroundColor: task.parentId ? "#f9f9f9" : "#fff",
        marginLeft: task.parentId ? "2rem" : "0",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <strong>{task.title}</strong>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          {!isCreatingSubTask && (
            <button onClick={() => setIsCreatingSubTask(true)}>
              Add sub task
            </button>
          )}

          {hasSubTasks && (
            <button onClick={() => setShowSubtasks((state) => !state)}>
              {showSubtasks ? "-" : "+"}
            </button>
          )}
        </div>
      </div>
      {showSubtasks &&
        hasSubTasks &&
        task.subtasks!.map((task) => <TaskItem key={task.id} task={task} />)}
      {isCreatingSubTask && (
        <CreateTask
          onCancelClick={() => setIsCreatingSubTask(false)}
          parentId={task.id}
        />
      )}
    </div>
  );
};
