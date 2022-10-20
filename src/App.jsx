import { useMount, useEventListener, useMemoizedFn } from 'ahooks';

// 组件
import { Adv, Navbar, Header, Intro } from '@/components';
// 全局样式
import '@/assets/style/reset.css';

function App() {
	// 计算 css 变量 --container-padding
	const calcConatinerPadding = useMemoizedFn(() => {
		const { clientWidth } = document.body;
		const containerMaxWidth = 980;
		let padding;

		if (clientWidth > containerMaxWidth) {
			padding = clientWidth - containerMaxWidth;
		} else {
			padding = 0;
		}

		return padding / 2;
	});

	// 初始化 css 变量 --container-padding
	useMount(() => {
		document.body.style.cssText += `
			--container-padding: ${calcConatinerPadding()}px;
		`;
	});

	// 监视/维护 css 变量 --container-padding
	useEventListener('resize', () => {
		document.body.style.cssText += `
			--container-padding: ${calcConatinerPadding()}px;
		`;
	});

	return (
		<>
			<Adv />
			<Navbar />
			<Header />
			<Intro />
		</>
	);
}

export default App;
