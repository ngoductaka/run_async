const fs = require('fs');

const pr = (p) => {
	return new Promise((res, rej) => {
		fs.readFile(p, 'utf8', (err, data) => {
			if (err) {
				console.log('errr', err)
			} else {
				res(data)
			}
		});

	})
}


pr('./long.html').then(data => {
	console.log('long---------------');
})

pr('./html_learn.html').then(data => {
	console.log('short------');
})

