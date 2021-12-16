import articles from '../../../articles.json';

export default function handler(req, res) {
	const { id } = req.query;

	const found = articles.find(article => article.id.toString() === id);
	if (found) {
		res.status(200).json(found);
	} else {
		res.status(404).json({ message: `Article with ${id} id not found!` });
	}
}
