import axios from 'axios'
import { server } from '/config/index.js'

function Name({ serverData }) {
	return (
		<>
			<h1>Name</h1>
			<p>Name from API: {serverData.name}</p>
			<p>Random ID passed to API: {serverData.id}</p>
		</>
	)
}

export default Name

export const getServerSideProps = async () => {
	const res = await axios.get(`${server}/api/name`, {
		params: { id: Math.ceil(10000 * Math.random()) },
	})
	return { props: { serverData: res.data } }
}
