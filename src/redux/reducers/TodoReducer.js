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

    // case TODO_ACTION_TYPES.EDIT_TODO :

    //    return {};

    default:
      return state;
  }
};
