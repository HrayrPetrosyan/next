import articles from '../../../articles.json';

export default function handler(req, res) {
	res.status(200).json(articles);
}
