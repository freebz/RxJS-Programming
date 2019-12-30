// 코드 17-14 스토어를 생성해 구독하는 예

import { createStore } from 'redux';

const store = createStore(reducer, 0);
store.subscribe(() => console.log(store.getState()));
