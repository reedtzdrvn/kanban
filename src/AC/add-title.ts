import { Action, ActionTypes } from "../models/models";

export const addTitle = (title: string): Action => {
  return { type: ActionTypes.ADD_TITLE, title };
};
