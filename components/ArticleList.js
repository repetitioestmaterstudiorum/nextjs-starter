import Link from 'next/link'
import styles from './ArticleList.module.css'

export default function ArticleList({ articles }) {
	const teaserLength = 30
	return (
		<div className={styles.articleList}>
			{articles.map(article => (
				<Link
					href={{
						pathname: '/articles/[articleId]',
						query: { articleId: article.id },
					}}
					passHref
					key={article.id}>
					<h4>
						{article.title.slice(0, teaserLength)}
						{article.title.length > teaserLength ? '...' : ''}
					</h4>
				</Link>
			))}
		</div>
	)
}
