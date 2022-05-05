import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import  photosReducer  from "./reducers/photosReducer";

const rootReducer = combineReducers({
  photosModule: photosReducer
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
export type RootStore=ReturnType<typeof rootReducer>
export default store;
