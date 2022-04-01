export default function handler({ query: { id } }, res) {
	res.status(200).json({ name: 'John Doe', id })

	// here could be a db call :)
}
