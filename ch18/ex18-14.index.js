// 코드 18-14 엔트리 포인트 파일 수정

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';

ReactDOM.render(
    <Provider store={configureStore()}>
	<App/>
    </Provider>,
    document.getElementById('root')
);
