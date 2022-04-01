import axios from 'axios'
import styles from './Article.module.css'

export default function ArticleListItem({ article }) {
	return (
		<div className={styles.article}>
			<h1>{article.title.toUpperCase()}</h1>
			<p>{article.body}</p>
		</div>
	)
}

// static stuff is done at build time
export const getStaticProps = async context => {
	const res = await axios.get(
		`https://jsonplaceholder.typicode.com/posts/${context.params.articleId}`
	)
	const article = res.data
	return { props: { article } }
}

export const getStaticPaths = async () => {
	const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
	const articles = res.data
	const ids = articles.map(article => article.id)
	const paths = ids.map(id => ({ params: { articleId: id.toString() } }))
	return { paths, fallback: false }
}

// would be done on the server on each request, and replace the two above functions
// export const getServerSideProps = async context => {
// 	const res = await axios.get(
// 		`https://jsonplaceholder.typicode.com/posts/${context.params.articleId}`
// 	)
// 	const article = res.data
// 	return { props: { article } }
// }
