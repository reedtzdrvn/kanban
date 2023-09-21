import { ITask } from "../models/models";
import Task from "./Task";

interface TasksProps {
  tasks: ITask[];
  deleteTask: (id: string, ColumnId: string) => void,
  ColumnId: string
}

const Tasks = ({ tasks, deleteTask, ColumnId }: TasksProps) => {
  return (
    <ul className="tasks">
      {tasks.map((item) => (
        <Task deleteTask={(id, ColumnId) => deleteTask(id, ColumnId)} ColumnId={ColumnId} key={item.id} task={item} />
      ))}
    </ul>
  );
};

export default Tasks;
