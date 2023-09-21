import { useState } from "react";
import TaskAdd from "./TaskAdd";
import TaskHeader from "./TaskHeader";
import Tasks from "./Tasks";
import TaskAddInput from "./TaskAddInput";
import { ITask } from "../models/models";

interface TaskGroupProps {
  tasks: ITask[];
  addTask: (task:string, title:string) => void;
  title: string;
  deleteTask: (id:string, ColumnId:string) => void;
  deleteColumn: (title: string) => void;
  id: string;
  ColumnId: string;
}

const TaskGroup = ({
  tasks,
  addTask,
  title,
  deleteTask,
  deleteColumn,
  id,
  ColumnId,
}: TaskGroupProps) => {
  const [hideInput, setHideInput] = useState(true);

  return (
    <div className="task-group">
      <TaskHeader title={title} deleteColumn={(title) => deleteColumn(title)} />
      <Tasks deleteTask={(id, ColumnId) => deleteTask(id, ColumnId)} ColumnId={ColumnId} tasks={tasks} />
      {hideInput ? (
        <TaskAdd setHideInput={() => setHideInput(false)} />
      ) : (
        <TaskAddInput columnTitle={title} addTask={(task, title) => addTask(task, title)} setHideInput={() => setHideInput(true)} />
      )}
    </div>
  );
};

export default TaskGroup;
