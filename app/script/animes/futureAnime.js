const { getHtml } = require('../../helpers');

const futureAnime = async (res) => {
	const $ = await getHtml('https://myanimelist.net/anime/season/later');
	const future = [];

	$('div.seasonal-anime').each(function() {
		const $this = $(this);
		const verifyImg = $this.find('img').attr('src');
		const anime = {
			title: $this.find('a.link-title').text().trim(),
			img: verifyImg ? verifyImg : $this.find('img').attr('data-src'),
			link: $this.find('a').attr('href'),
		};

		future.push(anime);
	});

	res.json({ future });
};

module.exports = futureAnime;