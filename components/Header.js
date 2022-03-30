import Link from 'next/link'

function Header() {
	return (
		<header>
			<ul>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/ads'>Ads</Link>
				</li>
				<li>
					<Link href='/ads/dynamic'>dynamic ad</Link>
				</li>
			</ul>
		</header>
	)
}

export default Header
