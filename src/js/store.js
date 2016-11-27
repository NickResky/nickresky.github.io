import { combineReducers, createStore, applyMiddleware} from "redux";
import { loadingBarMiddleware, loadingBarReducer } from 'react-redux-loading-bar';
import logger from "redux-logger";
import listReducer from "./reducers/listReducer";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

/*const errorHandler = (store) => (next) => (action) => {
	try {
		next(action);
	} catch(e) {
		throw new Error(e)
	}
}*/

const middleware = applyMiddleware(promise(), logger(), thunk, loadingBarMiddleware()/*, errorHandler*/);

const reducers = combineReducers({
	list: listReducer//,
	//loadingBar: loadingBarReducer
});

export default createStore(reducers, middleware);
