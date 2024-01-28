import { createStore } from "redux";

import rootReducer from './root-reduce';

const store = createStore(rootReducer);

export default store;