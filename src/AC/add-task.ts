import { Action, ActionTypes } from "../models/models"

export const addTask = (task:string, group: string):Action => {
    return { type: ActionTypes.ADD_TASK, task, group }
}