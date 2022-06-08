const btn = document.getElementById('myBtn');
const body = document.getElementsByTagName('body')[0];

const listener = function () {
	btn.addEventListener('click', async () => {
		const { paintColor } = await import('./metodo.js');

		paintColor(body);
	});
};

listener();