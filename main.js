
var hero = document.getElementsByClassName('hero')[0];
var bg1 = document.getElementsByClassName('hero__bg')[0];
var hero_bottom = document.getElementsByClassName('bottom-hero')[0];
var bg2 = document.getElementsByClassName('bottom-hero__bg')[0];


window.addEventListener('scroll', function() {
	var bg1_scroll_percent = (window.scrollY-hero.offsetTop)/hero.offsetHeight || 0;
	bg1.style.backgroundPosition = "50% calc(50% + " + bg1_scroll_percent*200 + "px)";

	var bg2_scroll_percent = (window.scrollY-hero_bottom.offsetTop)/hero_bottom.offsetHeight || 0;
	bg2.style.backgroundPosition = "50% calc(50% + " + bg2_scroll_percent*200 + "px)";
});



