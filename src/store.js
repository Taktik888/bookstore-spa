import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer  from './reducers/indexReducers';

const create = () => {
	const store = createStore( rootReducer, applyMiddleware(logger));
		return store
}

export default create;
