

// copy email onclick funciton
function copyEmail(element) {
	const email = 'evanvadapro@gmail.com';
	const textArea = document.createElement('textarea');
	textArea.value = email;
	
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand('copy');
	document.body.removeChild(textArea);

	const range = document.createRange();
	range.selectNodeContents(element.children[2]);
	const selection = window.getSelection();
	selection.removeAllRanges();
	selection.addRange(range);
}
