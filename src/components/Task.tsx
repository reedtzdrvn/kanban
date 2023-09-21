import deleteIcon from "../assets/delete-icon.png";
import { ITask } from "../models/models";

interface TaskProps {
  task: ITask;
  deleteTask: (id: string, ColumnId: string) => void;
  ColumnId: string;
}

const Task = ({ task, deleteTask, ColumnId }: TaskProps) => {
  return (
    <li className="task-item">
      <div className="task-item-wrapper">
        <p className="task-title">{task.text}</p>
        <img
          className="task-delete-btn"
          src={deleteIcon}
          alt="Delete Button"
          onClick={() => deleteTask(task.id, ColumnId)}
        />
      </div>
    </li>
  );
};

export default Task;
