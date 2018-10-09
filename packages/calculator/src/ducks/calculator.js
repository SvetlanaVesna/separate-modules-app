const moduleName = 'calculator';
const LOADING = `${moduleName}/LOADING`;
const LOADING_SUCCESS = `${moduleName}/LOADING_SUCCESS`;

function calculator(state = {
  loading: false,
  message: 'calculator reducer was loaded via a chunk.'
}, action) {
  switch (action.type) {
    case LOADING:
      return {...state, loading: true};
    case LOADING_SUCCESS:
      return {...state, loading: false}
  }
  return state
}

calculator.load = () => (dispatch) => {
  dispatch({type: LOADING});
  setTimeout(() => dispatch({type: LOADING_SUCCESS}), 2000)
};

export default calculator;