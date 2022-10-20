// style
import styles from './style.module.less';
// resource
import { MacBookProImage, MacBookProVideoPosterImage } from '@/assets/image';
import { MacBookProVideo } from '@/assets/video';

export default function Intro() {
	return (
		<section className={styles.intro}>
			<video
				src={MacBookProVideo}
				muted
				autoPlay
				// 视频封面
				poster={MacBookProVideoPosterImage}
				// 非全屏, 小屏幕播放
				playsInline></video>

			<div className="content">
				<h2 className="title">Supercharged for pros.</h2>
				<p className="text">
					The most powerful MacBook Pro ever is here. With the blazing-fast M1
					Pro or M1 Max chip — the first Apple silicon designed for pros — you
					get groundbreaking performance and amazing battery life. Add to that a
					stunning Liquid Retina XDR display, the best camera and audio ever in
					a Mac notebook, and all the ports you need. The first notebook of its
					kind, this MacBook Pro is a beast.
				</p>

				<a href="https://itisit.netlify.app/" className="link">
					Watch the event ＞
				</a>
			</div>
		</section>
	);
}
