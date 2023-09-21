import React, { useReducer } from "react";
import TaskGroup from "./components/TaskGroup";
import { initialState, reducer } from "./reducer/reducer";
import { addTask } from "./AC/add-task";
import { deleteTask } from "./AC/delete-task";
import { deleteColumn } from "./AC/delete-column";
import AddNewColumnBtn from "./components/AddNewColumnBtn";
import { addTitle } from "./AC/add-title";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      {state.columns.map((item, index) => (
        <TaskGroup
          key={item.id}
          ColumnId={item.id}
          title={item.title}
          id={item.id}
          addTask={(task, title) => dispatch(addTask(task, title))}
          deleteTask={(id, ColumnId) => dispatch(deleteTask(id, ColumnId))}
          deleteColumn={(title) => dispatch(deleteColumn(title))}
          tasks={item.tasks}
        />
      ))}
      <AddNewColumnBtn addTitle={(title) => dispatch(addTitle(title))}/>
    </div>
  );
};

export default App;
