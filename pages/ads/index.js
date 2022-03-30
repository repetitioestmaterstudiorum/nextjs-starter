import { useRouter } from 'next/router'
import { useState } from 'react'

function Ads() {
	const defaultAdId = 'enter ad id..'
	const [adId, setAdId] = useState('')
	const router = useRouter()

	const handleKeyDown = e => {
		e.preventDefault()
		setAdId(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()
		router.push(`${router.pathname}/${adId}`)
	}

	const handleFocus = e => {
		e.preventDefault()
		if (e.target.value === defaultAdId) {
			e.target.value = ''
		}
	}

	const handleBlur = e => {
		e.preventDefault()
		if (e.target.value === '') {
			e.target.value = defaultAdId
		}
	}

	return (
		<>
			<h1>Ads</h1>
			<p>Go to ad with a specific id:</p>
			<form
				onSubmit={handleSubmit}
				onKeyUp={handleKeyDown}
				onFocus={handleFocus}
				onBlur={handleBlur}>
				<label htmlFor='adId'></label>
				<input id='adId' type='text' defaultValue={defaultAdId} autoFocus required />
				<button type='submit'>Go</button>
			</form>
		</>
	)
}

export default Ads
