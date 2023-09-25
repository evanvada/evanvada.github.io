
// load theme
const prefers_dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
dark_enabled = localStorage.getItem("dark_enabled")
if (dark_enabled === 'true') {
	dark_enabled = true;
} else if (dark_enabled === 'false') {
	dark_enabled = false;
} else {
	dark_enabled = prefers_dark;
}

// change theme onclick funciton
function toggleTheme() {

	if (dark_enabled) {
		dark_enabled = false
		localStorage.setItem("dark_enabled",  "false")
		document.body.classList.add('text-only-transition')
		document.body.classList.remove('dark')
		document.body.classList.add('light')
	} else {
		dark_enabled = true
		localStorage.setItem("dark_enabled",  "true")
		document.body.classList.add('text-only-transition')
		document.body.classList.remove('light')
		document.body.classList.add('dark')
	}

	setTimeout(function () {
		document.body.classList.remove('text-only-transition');
	}, 200);
	
}

