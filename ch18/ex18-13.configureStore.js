// 코드 18-13 스토어를 생성하는 configureStore 함수

import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore() {
    const store = createStore(rootReducer);

    return store;
}
