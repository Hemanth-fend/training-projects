import { TODO_ACTION_TYPES } from "../action-types/ActionTypes"

export const AddTodoAction = (todo)=>{
  return {
    type: TODO_ACTION_TYPES.ADD_TODO, 
    payload: todo
  }
}


export const RemoveTodoAction = (id)=>{
  return {
    type: TODO_ACTION_TYPES.REMOVE_TODO,
    payload: id
  }
}


export const EditTodoAction = (id) => {
  return {
    type: TODO_ACTION_TYPES.EDIT_TODO, 
    payload: id
  }
}


export const updateTodoAction = (id, value) => {
  return {
    type: TODO_ACTION_TYPES.UPDATE_TODO,
    payload: {
      id :id,
      value:value
    }
  };
};