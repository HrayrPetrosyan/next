import styles from '../styles/Header.module.css';

function Header() {
	return (
		<div>
			<h1 className={styles.title}>
				<span>Webdev</span> News
			</h1>
			<p className={styles.description}>Some description</p>
		</div>
	)
}

export default Header
