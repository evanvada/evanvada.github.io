
let burger = document.querySelector('.header__burger')
let menu = document.querySelector('.mobile-menu')
let icon = document.querySelector('.header__burger .icon')
let side_links = document.querySelectorAll('.mobile-menu__nav a')
let logo = document.querySelector('.header > a')

side_links.forEach(a => {
	a.addEventListener('click', () => {
		closeMobileMenu();
	})
})

logo.addEventListener('click', () => {
	closeMobileMenu();
})

burger.addEventListener('click', () => {
	if (menu.classList.contains('show')) {
		closeMobileMenu()
	} else {
		openMobileMenu()
	}
});

function closeMobileMenu() {
	menu.classList.remove('show');
	icon.classList.remove('cross');
	icon.classList.add('burger');
}

function openMobileMenu() {
	menu.classList.add('show');
	icon.classList.remove('burger');
	icon.classList.add('cross');
}
