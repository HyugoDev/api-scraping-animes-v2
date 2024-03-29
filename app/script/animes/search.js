const { getHtml } = require('../../helpers');

const search = async (id, res) => {
	const $ = await getHtml(`https://www.animefenix.tv/animes?q=${id}`);
	const results = [];

	$('div.list-series article.serie-card').each(function () {
		const $this = $(this);
		const anime = {
			title: $this.find('a').attr('title'),
			id: $this.find('a').attr('href').split('https://www.animefenix.tv/')[1],
			img: $this.find('img').attr('src'),
		};
		results.push(anime);
	});
	res.json({ results });
};

module.exports = search;