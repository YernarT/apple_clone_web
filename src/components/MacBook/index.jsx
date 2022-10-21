import { useEffect, useState, useRef, useMemo } from 'react';

// style
import styles from './style.module.less';
// resource
import {
	MacBook_000_Image,
	MacBook_001_Image,
	MacBook_002_Image,
	MacBook_003_Image,
	MacBook_004_Image,
	MacBook_005_Image,
	MacBook_006_Image,
	MacBook_007_Image,
	MacBook_008_Image,
	MacBook_009_Image,
	MacBook_010_Image,
	MacBook_011_Image,
	MacBook_012_Image,
	MacBook_013_Image,
	MacBook_014_Image,
	MacBook_015_Image,
	MacBook_016_Image,
	MacBook_017_Image,
	MacBook_018_Image,
	MacBook_019_Image,
	MacBook_020_Image,
	MacBook_021_Image,
	MacBook_022_Image,
	MacBook_023_Image,
	MacBook_024_Image,
	MacBook_025_Image,
	MacBook_026_Image,
	MacBook_027_Image,
	MacBook_028_Image,
	MacBook_029_Image,
	MacBook_030_Image,
	MacBook_031_Image,
	MacBook_032_Image,
	MacBook_033_Image,
	MacBook_034_Image,
	MacBook_035_Image,
	MacBook_036_Image,
	MacBook_037_Image,
	MacBook_038_Image,
	MacBook_039_Image,
	MacBook_040_Image,
	MacBook_041_Image,
	MacBook_042_Image,
	MacBook_043_Image,
	MacBook_044_Image,
	MacBook_045_Image,
	MacBook_046_Image,
	MacBook_047_Image,
	MacBook_048_Image,
	MacBook_049_Image,
	MacBook_050_Image,
	MacBook_051_Image,
	MacBook_052_Image,
	MacBook_053_Image,
	MacBook_054_Image,
	MacBook_055_Image,
	MacBook_056_Image,
	MacBook_057_Image,
	MacBook_058_Image,
	MacBook_059_Image,
	MacBook_060_Image,
	MacBook_061_Image,
	MacBook_062_Image,
	MacBook_063_Image,
	MacBook_064_Image,
	MacBook_065_Image,
	MacBook_066_Image,
	MacBook_067_Image,
	MacBook_068_Image,
	MacBook_069_Image,
	MacBook_070_Image,
	MacBook_071_Image,
	MacBook_072_Image,
	MacBook_073_Image,
	MacBook_074_Image,
	MacBook_075_Image,
	MacBook_076_Image,
	MacBook_077_Image,
	MacBook_078_Image,
	MacBook_079_Image,
	MacBook_080_Image,
	MacBook_081_Image,
	MacBook_082_Image,
	MacBook_083_Image,
	MacBook_084_Image,
	MacBook_085_Image,
	MacBook_086_Image,
} from '@/assets/image';

const macbookImages = [
	MacBook_000_Image,
	MacBook_001_Image,
	MacBook_002_Image,
	MacBook_003_Image,
	MacBook_004_Image,
	MacBook_005_Image,
	MacBook_006_Image,
	MacBook_007_Image,
	MacBook_008_Image,
	MacBook_009_Image,
	MacBook_010_Image,
	MacBook_011_Image,
	MacBook_012_Image,
	MacBook_013_Image,
	MacBook_014_Image,
	MacBook_015_Image,
	MacBook_016_Image,
	MacBook_017_Image,
	MacBook_018_Image,
	MacBook_019_Image,
	MacBook_020_Image,
	MacBook_021_Image,
	MacBook_022_Image,
	MacBook_023_Image,
	MacBook_024_Image,
	MacBook_025_Image,
	MacBook_026_Image,
	MacBook_027_Image,
	MacBook_028_Image,
	MacBook_029_Image,
	MacBook_030_Image,
	MacBook_031_Image,
	MacBook_032_Image,
	MacBook_033_Image,
	MacBook_034_Image,
	MacBook_035_Image,
	MacBook_036_Image,
	MacBook_037_Image,
	MacBook_038_Image,
	MacBook_039_Image,
	MacBook_040_Image,
	MacBook_041_Image,
	MacBook_042_Image,
	MacBook_043_Image,
	MacBook_044_Image,
	MacBook_045_Image,
	MacBook_046_Image,
	MacBook_047_Image,
	MacBook_048_Image,
	MacBook_049_Image,
	MacBook_050_Image,
	MacBook_051_Image,
	MacBook_052_Image,
	MacBook_053_Image,
	MacBook_054_Image,
	MacBook_055_Image,
	MacBook_056_Image,
	MacBook_057_Image,
	MacBook_058_Image,
	MacBook_059_Image,
	MacBook_060_Image,
	MacBook_061_Image,
	MacBook_062_Image,
	MacBook_063_Image,
	MacBook_064_Image,
	MacBook_065_Image,
	MacBook_066_Image,
	MacBook_067_Image,
	MacBook_068_Image,
	MacBook_069_Image,
	MacBook_070_Image,
	MacBook_071_Image,
	MacBook_072_Image,
	MacBook_073_Image,
	MacBook_074_Image,
	MacBook_075_Image,
	MacBook_076_Image,
	MacBook_077_Image,
	MacBook_078_Image,
	MacBook_079_Image,
	MacBook_080_Image,
	MacBook_081_Image,
	MacBook_082_Image,
	MacBook_083_Image,
	MacBook_084_Image,
	MacBook_085_Image,
	MacBook_086_Image,
];

export default function MacBook() {
	const canvasRef = useRef();
	// macbook 图片
	const [macbook, setMacbook] = useState(macbookImages[0]);
	const [state, setState] = useState({
		shwoText: false,
	});

	function handleScroll() {
		const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
		// 滚动系数
		const scrolled = scrollTop / (scrollHeight - clientHeight);

		console.log(`scrollTop: ${scrollTop}`);

		// 切换图片的开始, 结束点
		const start = 1260,
			end = 4360,
			step = (end - start) / macbookImages.length;

		/**
		 * 计算图片索引
		 * @param {Number} scrollTop 滚动距离
		 * @return {Number} 图片索引
		 */
		const getImageIndex = scrollTop => {
			let breakPoint = start,
				loopCount = 0;

			for (breakPoint; breakPoint <= end; breakPoint += step, loopCount += 1) {
				if (breakPoint >= scrollTop) {
					console.log(breakPoint, loopCount);
					return loopCount - 1;
				}
			}

			return loopCount - 1;
		};

		if (scrollTop >= start && scrollTop <= end) {
			let macbook = macbookImages[getImageIndex(scrollTop)];
			console.log('图片索引: ', getImageIndex(scrollTop));
			console.log('切换macbook图片: ', macbook);
			setMacbook(macbook);
		}

		if (scrollTop <= start) {
			setMacbook(macbookImages.at(0));
		}

		if (scrollTop >= end) {
			setMacbook(macbookImages.at(-1));
			console.log('图片切换完毕');
		}

		// 分割线

		// 显示macbook信息的动画的开始, 结束点
		const startText = 4270;

		if (scrollTop >= startText) {
			setState(prevState => ({ ...prevState, shwoText: true }));
		} else {
			setState(prevState => ({ ...prevState, shwoText: false }));
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		const ctx = canvasRef.current.getContext('2d');
		const macbookImage = new Image();
		macbookImage.src = macbook;
		macbookImage.alt = 'Animation of 14 and 16 inch MacBook Pro';

		macbookImage.onload = () => {
			ctx.drawImage(macbookImage, 0, 0, 980, 786);
		};
	}, [macbook]);

	return (
		<section className={styles.macBook}>
			<canvas ref={canvasRef} width={980} height={786}></canvas>
			<p className={`data data-1 ${state.shwoText ? 'show-text' : ''}`}>
				<span className="border"></span>
				<span className="up-to">Up to</span>
				<div className="val-wrap">
					<span className="val">13x</span>
					<span className="desc">
						faster
						<br />
						graphics
						<br />
						performance²
					</span>
				</div>
			</p>

			<p className={`data data-2 ${state.shwoText ? 'show-text' : ''}`}>
				<span className="border"></span>
				<span className="up-to">Up to</span>
				<div className="val-wrap">
					<span className="val">3.7x</span>
					<span className="desc">
						faster CPU
						<br />
						performance¹
					</span>
				</div>
			</p>

			<p className={`data data-3 ${state.shwoText ? 'show-text' : ''}`}>
				<span className="border"></span>
				<span className="up-to">Up to</span>
				<div className="val-wrap">
					<span className="val">21</span>
					<span className="desc">
						hours
						<br />
						battery life⁴
					</span>
				</div>
			</p>

			<p className={`data data-4 ${state.shwoText ? 'show-text' : ''}`}>
				<span className="border"></span>
				<span className="up-to">Up to</span>
				<div className="val-wrap">
					<span className="val">11x</span>
					<span className="desc">
						faster
						<br />
						machine
						<br />
						learning³
					</span>
				</div>
			</p>
		</section>
	);
}
