import { useState } from "react";
import cancelIcon from "../assets/cancel-icon.png";

interface AddNewColumnInputProps {
    addTitle: (newTitle: string) => void,
    setHideInput: () => void
}

const AddNewColumnInput = ({addTitle, setHideInput} : AddNewColumnInputProps) => {
  const [newTitle, setNewTitle] = useState("");

  const addColumnHandler = () => {
    if (newTitle.trim().length === 0) return;
    addTitle(newTitle);
    setNewTitle("");
    setHideInput();
  };

  return (
    <div className="task-group-add-input">
      <textarea
        className="task-group-add-text"
        placeholder="Enter a new task"
        value={newTitle}
        autoFocus
        onChange={(e) => setNewTitle(e.target.value)}
      ></textarea>
      <div className="text-group-add-btns-wrapper">
        <span className="task-group-add" onClick={addColumnHandler}>
          Add
        </span>
        <button className="task-group-cancel" onClick={setHideInput}>
          <img alt="Cancel button" src={cancelIcon} />
        </button>
      </div>
    </div>
  );
};

export default AddNewColumnInput;
