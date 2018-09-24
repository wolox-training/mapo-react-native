import { actions } from './actions';

const initialState = {
  todos: [
    {
      key: 1,
      name: 'todo one'
    },
    {
      key: 2,
      name: 'todo two'
    },
    {
      key: 3,
      name: 'todo three'
    }
  ]
};

const reducer = (state = initialState, action) => {
  const { todos } = state;
  const { type, payload } = action;

  switch (type) {
    case actions.ADD: {
      return {
        ...state,
        todos: [{ name: payload, key: state.todos.lenght + 2 }, ...todos]
      };
    }
    case actions.REMOVE: {
      return {
        ...state,
        todos: todos.filter(todo => todo.key !== payload)
      };
    }
    default:
      break;
  }

  return state;
};

export default reducer;
