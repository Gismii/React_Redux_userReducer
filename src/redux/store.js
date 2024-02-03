import { createStore, applyMiddleware } from "redux";
//aplyMiddlware serve para exibir os logs, olpcional.
import rootReducer from './root-reduce';
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;