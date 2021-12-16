import Link from 'next/link'
import styles from '../styles/Articles.module.css';

function Articles({ articles }) {
	return (
		<div className={styles.grid}>
			{articles.map(article => (
				<Link key={article.id} href="/article/[id]" as={`/article/${article.id}`}>
					<a className={styles.card}>
						<h3 >{article.title}</h3>
						<p>{article.body}</p>
					</a>
				</Link>
			))}
		</div>
	)
}

export default Articles
