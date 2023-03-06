import { TODO_ACTION_TYPES } from "../action-types/ActionTypes"

export const AddTodoAction = (todo)=>{

  return {type: TODO_ACTION_TYPES.ADD_TODO, payload: todo}

}


export const RemoveTodoAction = (index)=>{

  return {type: TODO_ACTION_TYPES.REMOVE_TODO, payload: index}
  
}


// export const EditTodoAction = (index) => {

//   return {type: TODO_ACTION_TYPES.EDIT_TODO , payload: index}
// }