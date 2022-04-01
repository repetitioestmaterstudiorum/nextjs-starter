import Head from 'next/head'
import axios from 'axios'
import ArticleList from '/components/ArticleList.js'

export default function Articles({ articles }) {
	return (
		<>
			<h1>Articles</h1>

			<ArticleList articles={articles} />
		</>
	)
}

// could be done on the server instead, at runtime
export const getStaticProps = async () => {
	const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
	const data = res.data
	return {
		props: { articles: data },
	}
}
