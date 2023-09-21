export interface ITask {
  text: string;
  id: string;
}

export interface ITaskItem {
  title: string;
  tasks: ITask[];
  id: string;
}

export type State = {
  columns: ITaskItem[];
};

export enum ActionTypes {
  ADD_TASK = "ADD_TASK",
  DELETE_TASK = "DELETE_TASK",
  DELETE_COLUMN = "DELETE_COLUMN",
  ADD_TITLE = "ADD_TITLE",
  CHANGE_TASKS = "CHANGE_TASKS",
}

interface IActionAddTask {
  type: ActionTypes.ADD_TASK;
  task: string;
  group: string;
}

interface IActionDeleteTask {
  type: ActionTypes.DELETE_TASK;
  id: string;
  ColumnId: string;
}

interface IActionDeleteColumn {
  type: ActionTypes.DELETE_COLUMN;
  title: string;
}

interface IActionAddTitle {
  type: ActionTypes.ADD_TITLE;
  title: string;
}

interface IActionChangeTasks {
  type: ActionTypes.ADD_TITLE;
  title: string;
}

export type Action =
  | IActionAddTask
  | IActionDeleteTask
  | IActionDeleteColumn
  | IActionAddTitle
  | IActionChangeTasks;
