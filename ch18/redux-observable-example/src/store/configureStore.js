import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../epics';
import rootReducer from '../reducers';

export default function configureStore() {
    /*
    const store = createStore(
	rootReducer,
	applyMiddleware(createEpicMiddleware(rootEpic))
    );
    */
    
    const epicMiddleware = createEpicMiddleware();
    const store = createStore(
	rootReducer,
	applyMiddleware(epicMiddleware)
    );
    epicMiddleware.run(rootEpic);

    return store;
}
