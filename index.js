
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
