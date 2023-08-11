
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

// apply theme
if (dark_enabled) {
	document.body.classList.add('dark');
} else {
	document.body.classList.add('light');
}

// change theme onclick funciton
function toggleTheme() {
	dark_enabled = !dark_enabled
	document.body.classList.toggle('dark')
	document.body.classList.toggle('light')
	localStorage.setItem("dark_enabled", dark_enabled ? "true" : "false")
}

