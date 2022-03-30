import { useRouter } from 'next/router'

function DynamicAdId() {
	const router = useRouter()
	const { adId } = router.query

	return (
		<>
			<h1>Dynamic ad id:</h1>
			<p>{adId}</p>
		</>
	)
}

export default DynamicAdId
