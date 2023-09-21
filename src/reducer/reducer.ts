import { Action, ActionTypes, State } from "../models/models";

const generateId = () => {
  return Math.random().toString(10).substring(2, 10);
};

export const initialState: State = {
  columns: [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      return {
        columns: state.columns.map((item) => {
          if (item.title === action.group) {
            return {
              ...item,
              tasks: [
                ...item.tasks,
                {
                  text: action.task,
                  id: generateId(),
                },
              ],
            };
          } else return item;
        }),
      };
    case ActionTypes.ADD_TITLE: {
      return {
        ...state,
        columns: [
          ...state.columns,
          { title: action.title, tasks: [], id: generateId() },
        ],
      };
    }
    case ActionTypes.DELETE_TASK: {
      return {
        ...state,
        columns: state.columns.map((item) => {
          if (item.id === action.ColumnId) {
            return {
              ...item,
              tasks: item.tasks.filter((task) => task.id !== action.id),
            };
          }
          return item;
        }),
      };
    }
    case ActionTypes.DELETE_COLUMN: {
      return {
        ...state,
        columns: state.columns.filter((item) => item.title !== action.title),
      };
    }
    default:
      return state;
  }
};
