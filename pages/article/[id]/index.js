// import { useRouter } from 'next/router'
import Link from 'next/link'

function Article({ article }) {
	// const { query: { id } } = useRouter();


	return (
		<div>
			{/* This is an article {id} */}
			<h1>{article.title}</h1>
			<p>{article.body}</p>
			<br />
			<Link href="/">Go back</Link>
		</div>
	)
}

// export const getServerSideProps = async (context) => {
// 	const res = await fetch(
// 		`https://jsonplaceholder.typicode.com/posts/${context.params.id}`
// 	)
// 	const article = await res.json()
	
// 	return {
// 		props: {
// 			article
// 		}
// 	}
// }

export const getStaticProps = async (context) => {
	const res = await fetch(
		`http://localhost:3000/api/articles/${context.params.id}`
	);
	const article = await res.json();

	return {
		props: {
			article
		}
	};
}

export const getStaticPaths = async () => {
	const res = await fetch('http://localhost:3000/api/articles/');
	const articles = await res.json();

	const paths = articles.map(article => ({ params: { id: article.id.toString() } }));

	return {
		paths,
		fallback: false
	}
}

export default Article
