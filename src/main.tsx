// React & 周边库
import { StrictMode } from 'react';
import { render } from 'react-dom';

// 组件
import App from './App';

render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById('root'),
);
