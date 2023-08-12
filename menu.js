
let burger = document.querySelector('.header__burger')
let menu = document.querySelector('.mobile-menu')
let icon = document.querySelector('.header__burger .icon')
let links = document.querySelectorAll('.mobile-menu__nav a, .header > a')

links.forEach(a => {
	a.addEventListener('click', () => {
		// close menu if the link redirects to the same page

		const current_url = window.location.href;
		const clicked_url = a.href;
		const current_path = current_url.split('#')[0];
		const clicked_path = clicked_url.split('#')[0];
		
		if (clicked_url == "javascript:void(0);") {
			closeMobileMenu();
			return;
		}

		if (current_path !== clicked_path) {
			return;
		}

		if (clicked_url == clicked_path) {
			return;
		}

		closeMobileMenu();
	})
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
