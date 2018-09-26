import { createReducer } from 'redux-recompose';

import { actions } from './actions';

const initialState = {
  todos: [
    {
      key: 1,
      name: 'todo one',
      checked: false
    },
    {
      key: 2,
      name: 'todo two',
      checked: false
    },
    {
      key: 3,
      name: 'todo three',
      checked: false
    }
  ]
};

const reducerDescription = {
  [actions.ADD]: (state, action) => {
    const { todos } = state;
    return {
      ...state,
      todos: [{ ...action.payload }, ...todos]
    };
  },
  [actions.REMOVE]: (state, action) => {
    const { todos } = state;
    return {
      ...state,
      todos: todos.filter(todo => todo.key !== action.payload)
    };
  },

  [actions.CHECKED]: (state, action) => {
    const { todos } = state;
    return {
      ...state,
      todos: todos.map(
        todo =>
          todo.key === action.payload
            ? {
                ...todo,
                checked: !todo.checked
              }
            : todo
      )
    };
  },
  [actions.DELETECHECKED]: state => {
    const { todos } = state;
    return {
      ...state,
      todos: todos.filter(todo => todo.checked === false)
    };
  }
};

const reducer = createReducer(initialState, reducerDescription);

export default reducer;
