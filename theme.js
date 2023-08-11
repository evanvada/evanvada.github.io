
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (prefersDark) {
	document.body.classList.add('dark');
} else {
	document.body.classList.add('light');
}

// change theme onclick funciton
function toggleTheme() {
	document.body.classList.toggle('dark');
	document.body.classList.toggle('light');
}


document.body.classList.toggle('dark');
document.body.classList.toggle('light');

