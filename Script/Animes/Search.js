const { getHtml } = require('../../helpers');

const Search = async (id) => {
	const $ = getHtml(`https://www.animefenix.com/animes?q=${id}`);
	const results = [];

	$('div.list-series article.serie-card').each(function() {
		const anime = {
			title: $(this).find('a').attr('title'),
			id: $(this).find('a').attr('href').split('https://www.animefenix.com/')[1],
			img: $(this).find('img').attr('src'),
		};
		results.push(anime);
	});
	return results; 
};

module.exports = Search;