
let hero = document.querySelector('.hero')
let bg1 = document.querySelector('.hero__bg')
let hero_bottom = document.querySelector('.bottom-hero')
let bg2 = document.querySelector('.bottom-hero__bg')


window.addEventListener('scroll', function() {
	let bg1_scroll_percent = (window.scrollY-hero.offsetTop)/hero.offsetHeight || 0
	bg1.style.backgroundPosition = "50% calc(50% + " + bg1_scroll_percent*200 + "px)"

	let bg2_scroll_percent = (window.scrollY-hero_bottom.offsetTop)/hero_bottom.offsetHeight || 0
	bg2.style.backgroundPosition = "50% calc(50% + " + bg2_scroll_percent*200 + "px)"
});






let burger = document.querySelector('.header__burger')
let menu = document.querySelector('.header__side')
let icon = document.querySelector('.header__burger .icon')
let side_links = document.querySelectorAll('.header__mobile-nav a')
let logo = document.querySelector('.header__top > a')

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





// éviter d'afficher l'ancre dans l'URL
var links = document.querySelectorAll("a");
links.forEach(function(link) {
	link.addEventListener("click", function(event) {
		event.preventDefault();
		var anchor = this.getAttribute("href");
		document.querySelector(anchor).scrollIntoView({
			behavior: "smooth"
		});
	});
});




