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

const reducer = (state = initialState, action) => {
  const { todos } = state;
  const { type, payload } = action;

  switch (type) {
    case actions.ADD: {
      const key = Date.now();
      return {
        ...state,
        todos: [{ name: payload, key, checked: false }, ...todos]
      };
    }
    case actions.REMOVE: {
      return {
        ...state,
        todos: todos.filter(todo => todo.key !== payload)
      };
    }
    case actions.CHECKED: {
      return {
        ...state,
        todos: todos.map(
          todo =>
            todo.key === payload
              ? {
                  ...todo,
                  checked: !todo.checked
                }
              : todo
        )
      };
    }
    case actions.DELETECHECKED: {
      return {
        ...state,
        todos: todos.filter(todo => todo.checked === false)
      };
    }
    default:
      return state;
  }
};

export default reducer;
