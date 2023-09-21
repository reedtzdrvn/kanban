import { Action, ActionTypes } from "../models/models"

export const deleteTask = (id:string, ColumnId:string):Action => {
    return { type: ActionTypes.DELETE_TASK, id, ColumnId }
}