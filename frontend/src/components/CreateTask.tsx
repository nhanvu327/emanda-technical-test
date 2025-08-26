import React, { useState, useMemo } from "react";
import { useTasks } from "../context/TaskContext";

const CreateTask = ({
  parentId,
  onCancelClick,
}: {
  parentId?: number;
  onCancelClick?: () => void;
}) => {
  const [title, setTitle] = useState("");
  const { addTask } = useTasks();
  const isCreatingSubTask = !!parentId;
  const label = isCreatingSubTask ? "sub task" : "task";

  return (
    <>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={`New ${label}`}
      />
      <button
        onClick={() => {
          addTask(title, parentId);
          setTitle("");
        }}
      >
        Add {label}
      </button>
      {isCreatingSubTask && <button onClick={onCancelClick}>Cancel</button>}
    </>
  );
};

export default CreateTask;
