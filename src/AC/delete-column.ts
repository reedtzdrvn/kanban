import { Action, ActionTypes } from "../models/models";

export const deleteColumn = (title: string): Action => {
  return { type: ActionTypes.DELETE_COLUMN, title };
};
