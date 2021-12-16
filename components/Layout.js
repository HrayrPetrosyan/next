import Nav from './Nav';
import Header from './Header'
import styles from '../styles/Layout.module.css';

function Layout({ children }) {
	return (
		<>
		<Nav />
		<Header />
		<div className={styles.container}>
			{children}
		</div>
		</>
	);
}

export default Layout;
