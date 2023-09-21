import addIcon from "../assets/add-icon.png";

interface TaskAddProps {
  setHideInput: () => void;
}

const TaskAdd = ({ setHideInput }: TaskAddProps) => {
  return (
    <div className="task-group-add" onClick={setHideInput}>
      <p className="task-group-add-btn">Add a new task</p>
      <img alt="Add Icon" src={addIcon} className="task-group-add-icon" />
    </div>
  );
};

export default TaskAdd;
