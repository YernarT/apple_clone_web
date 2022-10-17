// React
import { useRef, useEffect } from 'react';

// 组件
import { Adv, Navbar } from '@/components';
// 全局样式
import '@/assets/style/reset.css';

function App() {
	return (
		<>
			<Adv />
			<Navbar />

			{/* <AppStyled> */}
			{/* <Canvas ref={canvasRef} /> */}
			{/* </AppStyled> */}
		</>
	);
}

export default App;
