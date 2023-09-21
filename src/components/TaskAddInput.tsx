import { useState } from "react";
import cancelIcon from "../assets/cancel-icon.png";

interface TaskAddInputProps {
  setHideInput: () => void;
  addTask: (task: string, title: string) => void;
  columnTitle: string;
}

const TaskAddInput = ({
  setHideInput,
  addTask,
  columnTitle,
}: TaskAddInputProps) => {
  const [newTitle, setNewTitle] = useState("");

  const addTaskHandler = () => {
    addTask(newTitle, columnTitle);
    setNewTitle("");
    setHideInput();
  };

  return (
    <div className="task-group-add-input">
      <textarea
        className="task-group-add-text"
        placeholder="Enter a new task"
        autoFocus
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      ></textarea>
      <div className="text-group-add-btns-wrapper">
        <span className="task-group-add" onClick={addTaskHandler}>
          Add
        </span>
        <button className="task-group-cancel" onClick={setHideInput}>
          <img alt="Cancel Button" src={cancelIcon} />
        </button>
      </div>
    </div>
  );
};

export default TaskAddInput;
