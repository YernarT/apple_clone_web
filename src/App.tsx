// React
import { useRef, useEffect } from 'react';

// 样式组件
import { ResetCss, AppStyled, Canvas } from './style';

function App() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const ctx = canvasRef.current?.getContext('2d');

	useEffect(() => {
		let x = 40;

		let timer = setInterval(() => {
			// ctx?.clearRect(0, 0, 9999, 9999);

			ctx?.beginPath();
			ctx?.arc(x, 40, 10, 0, 2 * Math.PI, false);
			ctx?.stroke();

			x += 10;
		}, 60);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<>
			<ResetCss />

			<AppStyled>
				<Canvas ref={canvasRef} />
			</AppStyled>
		</>
	);
}

export default App;
