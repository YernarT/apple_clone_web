// React
import { useRef, useEffect } from 'react';

// 组件
import { Adv, Navbar, Header } from '@/components';
// 全局样式
import '@/assets/style/reset.css';

function App() {
	return (
		<>
			<Adv />
			<Navbar />
			<Header />

			{/* <AppStyled> */}
			{/* <Canvas ref={canvasRef} /> */}
			{/* </AppStyled> */}
		</>
	);
}

export default App;
