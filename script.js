const navMobile = document.querySelector('.nav__mob');
const navBtn = document.querySelector('.hamburger');
const mobNavLinks = document.querySelectorAll('.nav__mob-link');

const searchIcon = document.querySelector('.nav__mobile--magnifying-glass');
const searchBar = document.querySelector('.nav__search-bar-mobile');
const navIcons = document.querySelector('.nav__mobile--right');
const mobInput = document.querySelector('.nav__search-bar-mobile-input');
const deskInput = document.querySelector('.nav__search-bar-desktop-input');
const microPhone = document.querySelector('.fa-microphone');
const microPhoneMob = document.querySelector('.fa-microphone-mob');

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav__mob--active');

	mobNavLinks.forEach((item) => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav__mob--active');
			navBtn.classList.remove('is-active');
		});
	});
};

const handleSearch = () => {
	searchBar.classList.toggle('nav__search-bar-mobile-active');
	navIcons.classList.toggle('nav__mobile--right-active');
};

const handleSumbitMob = () => {
	searchBar.classList.toggle('nav__search-bar-mobile-active');
	navIcons.classList.toggle('nav__mobile--right-active');
	mobInput.value = '';
};

const handleSumbitDesk = () => {
	deskInput.value = '';
};

navBtn.addEventListener('click', handleNav);
searchIcon.addEventListener('click', handleSearch);
mobInput.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		handleSumbitMob();
		alert('Search complete!')
	}
});

deskInput.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		handleSumbitDesk();
		alert('Search complete!')
	}
});

microPhone.addEventListener('click', () =>
	alert('Please unmute your microphone.')
);

microPhoneMob.addEventListener('click', () =>
alert('Please unmute your microphone.')
);