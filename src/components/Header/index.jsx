import styles from './style.module.less';

const menuItems = ['Overview', 'Why Mac', 'Tech Specs'];

export default function Header() {
	return (
		<header className={styles.header}>
			<h3 className="title-wrap">
				<a href="https://itisit.netlify.app/" className="link">
					<span className="title">MacBook Pro</span>
					<span className="subtitle">14” and 16” models</span>
				</a>
			</h3>

			<ul className="menu">
				{menuItems.map((item, idx) => (
					<li className="item" key={idx}>
						<a
							href="https://itisit.netlify.app/"
							className={`link ${idx === 0 ? 'current' : ''}`}>
							{item}
						</a>
					</li>
				))}
			</ul>

			<a className="action-btn" href="https://itisit.netlify.app/">
				Buy
			</a>
		</header>
	);
}
