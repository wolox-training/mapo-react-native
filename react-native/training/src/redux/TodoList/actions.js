import { createTypes } from 'redux-recompose';

export const actions = createTypes(['ADD', 'REMOVE', 'CHECKED', 'DELETECHECKED'], '@@LIST');

export const actionCreators = {
  add: text => ({ type: actions.ADD, payload: text }),
  remove: key => ({ type: actions.REMOVE, payload: key }),
  checked: key => ({ type: actions.CHECKED, payload: key }),
  deleteChecked: () => ({ type: actions.DELETECHECKED })
};
