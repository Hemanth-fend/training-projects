import { TODO_ACTION_TYPES } from "../action-types/ActionTypes";

export const initialState = {
  todos: [],
 
};

export const TodoReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case TODO_ACTION_TYPES.ADD_TODO:
      return { todos: [action.payload, ...state.todos] };

    case TODO_ACTION_TYPES.REMOVE_TODO:
      
      const arr = JSON.parse(JSON.stringify(state.todos));
      arr.splice(action.payload, 1);

      return { todos: arr };

    // const deltodo = state.todos.filter((item)=> item.id != action.id)
    // return {
    //   ...state, todos: deltodo
    // }

    case TODO_ACTION_TYPES.EDIT_TODO:
      const eid = action.payload;
      let newEditTodo = state.todos.find((value, idx) => eid === idx);
      return {id:id, value: newEditTodo};

    case TODO_ACTION_TYPES.UPDATE_TODO:
      const { id, value } = action.payload;
      const updatedTodos = JSON.parse(JSON.stringify(state.todos));
      updatedTodos[id] = value;   
      return {...state, todos: updatedTodos}

    default:
      return state;
  }
};
