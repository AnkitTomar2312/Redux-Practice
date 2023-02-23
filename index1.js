const redux = require("redux");
const thunk = require("redux-thunk").default;

const rootReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "inc": {
      return {
        count: state.count + 1,
      };
      break;
    }
  }
};

const store = redux.createStore(
  rootReducer,
  {
    count: 0,
  },
  redux.applyMiddleware(thunk)
);

const actionOnUpdateState = () => {
  const data = store.getState();
  console.log(data);
};

store.subscribe(actionOnUpdateState);

const increment = () => {
  return (dispatch) => {
    let type = "inc";
    let payload = {};
    dispatch({
      type,
      payload,
    });
  };
};

store.dispatch(increment());
