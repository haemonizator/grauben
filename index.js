$(document).ready(function() {
	console.log('get out of here stalker');
	initMenuEvents();


});

const getContent = (selectedPart) => {

};

const initMenuEvents = () => {
	const menuElements = document.querySelector('.js-sidebar').childNodes;

	menuElements.forEach(elem => {
		elem.addEventListener('click', () => {
			if (!elem.classList.contains('active')) {
				document.querySelector('.active').classList.remove('active');
				elem.classList.add('active');
				/* $('.js-content').html('kourwa'); */
				$('.js-content').load('menu-pages/treasury.html');
			}
		});
	});
}