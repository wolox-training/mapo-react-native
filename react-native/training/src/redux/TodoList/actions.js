import { createTypes } from 'redux-recompose';

export const actions = createTypes(['ADD', 'REMOVE', 'CHECKED', 'DELETECHECKED'], '@@LIST');

export const actionCreators = {
  add: text => {
    const key = Date.now();
    return { type: actions.ADD, payload: { name: text, key, checked: false }, target: 'todos' };
  },
  remove: key => ({ type: actions.REMOVE, payload: key, target: 'todos' }),
  checked: key => ({ type: actions.CHECKED, payload: key }),
  deleteChecked: () => ({ type: actions.DELETECHECKED })
};
