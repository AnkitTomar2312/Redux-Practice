const redux = require("redux");
const thunk = require("redux-thunk").default;

const rootReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return {
        count: state.count + 1,
      };
    }
    case "DECREMENT": {
      return {
        count: state.count - 1,
      };
    }
    case "INCREMENT_BY_VALUE": {
      return {
        count: state.count + action.payload.value,
      };
    }
    case "DECREMENT_BY_VALUE": {
      return {
        count: state.count - action.payload.value,
      };
    }
    default:
      return state;
  }
};

const store = redux.createStore(
  rootReducer,
  {
    count: 0,
  },
  redux.applyMiddleware(thunk)
);

//when ever any change occur we are going to
const triggeredOnStoreUpdate = () => {
  const data = store.getState();
  console.log(data);
};

//subscribed to our store
store.subscribe(triggeredOnStoreUpdate);

const incrementCounter = (value) => {
  return (dispatch) => {
    let type = "INCREMENT";
    let payload = {};
    if (value) {
      type = "INCREMENT_BY_VALUE";
      payload.value = value;
    }
    dispatch({
      type,
      payload,
    });
  };
};

const decrementCounter = (value) => {
  return (dispatch) => {
    let type = "DECREMENT";
    let payload = {};
    if (value) {
      type = "DECREMENT_BY_VALUE";
      payload.value = value;
    }
    dispatch({
      type,
      payload,
    });
  };
};

//dispatchig our action
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(incrementCounter(Math.floor(Math.random() * 1000)));
store.dispatch(decrementCounter(Math.floor(Math.random() * 1000)));
