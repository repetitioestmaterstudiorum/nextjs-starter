import Header from './Header.js'
import Footer from './Footer.js'
import Head from 'next/head'

function Layout({ children }) {
	return (
		<>
			<Head>
				<title>{children.type.name}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	)
}

export default Layout
