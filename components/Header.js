import memoize from 'lodash.memoize'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Header.module.css'

export default function Header() {
	return (
		<header className={styles.header}>
			<ul>
				<LinkLi relativeLink='/' pageName='Home' />
				<LinkLi relativeLink='/articles' pageName='Articles' />
				<LinkLi relativeLink='/ads' pageName='Ads' />
				<LinkLi relativeLink='/name' pageName='Name' />
			</ul>
		</header>
	)
}

function LinkLi({ relativeLink, pageName }) {
	const realBasePath = getBasePathMemo(useRouter().asPath)
	const relPath = getBasePathMemo(relativeLink)

	return (
		<li style={relPath === realBasePath ? { backgroundColor: 'white' } : {}}>
			<Link href={relativeLink}>{pageName}</Link>
		</li>
	)
}

const getBasePath = path => '/' + path.split('/')[1]
const getBasePathMemo = memoize(getBasePath)
