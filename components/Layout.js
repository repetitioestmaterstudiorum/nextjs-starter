import Header from './Header.js'
import Footer from './Footer.js'
import Head from 'next/head'
import styles from './Layout.module.css'

export default function Layout({ children }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>{children.type.name}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer className={styles.footer} />
		</div>
	)
}
