const thunkMiddleware = (store : any) => (next : any ) => (action : object) =>
  typeof action === "function"
    ? action(store.dispatch, store.getState)
    : next(action);

export default thunkMiddleware;
