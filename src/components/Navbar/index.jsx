import styles from './style.module.less';

const navItems = [
	'Mac',
	'iPad',
	'iPhone',
	'Watch',
	'AirPods',
	'TV & Home',
	'Only on Apple',
	'Support',
	'Where to Buy',
];

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<ul className="list-h">
				<li className="item">
					<a className="link link-apple" href="https://itisit.netlify.app/"></a>
				</li>
				{navItems.map((item, idx) => (
					<li className="item" key={idx}>
						<a className="link" href="https://itisit.netlify.app/">
							{item}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
