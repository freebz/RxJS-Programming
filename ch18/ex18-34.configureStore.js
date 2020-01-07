// 예제 18-34 리덕스에 redux-observable 미들웨어 적용

import { createStore, applyMiddleware } from 'redex';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../epics';
import rootReducer from '../reducers';

export default function configureStore() {
    const store = createStore(
	rootReducer,
	applyMiddleware(createEpicMiddleware(rootEpic))
    );

    return store;
}
