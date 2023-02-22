In redux we have a function  called createStore() to create a store
// that will hold the complete state and it expects some parameters
// 1. Reducer Function (It is a pure reducer function which expects some state
//   and the actions based on which a new state is generated so that we can update our
//   store and accordingly our view)
//   eg..rootReducer
// 2. Initial State  eg...count: 0;
// 3. Some-Middle-wares
