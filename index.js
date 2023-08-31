

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


// handle form submit via Formspree
const form = document.querySelector('.bottom-hero__form');
form.addEventListener("submit", function(event) {
	event.preventDefault();

    var data = new FormData(event.target);
	fetch("https://formspree.io/f/mrgwkbpk", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
	})
	.then(response => {
		console.log("fetch returned:", JSON.stringify(response));

        if (response.ok) {
			showStatus("> Message envoyé");
            form.reset()
        } else {
            response.json().then(data => {
                if (data?.errors != null && data?.errors[0]?.code != null) {
					if (data.errors[0].code == "TYPE_EMAIL") {
						showStatus("> Erreur email invalide");
					} else {
						showStatus("> Erreur", data.errors[0].code);
					}
                } else {
					showStatus("> Erreur inconnue");
                }
            })
        }
	})
	.catch(response => {
		console.log("fetch error:", JSON.stringify(response));
		showStatus("> Erreur envoie message");
	});
});



const formButton = document.querySelector('.bottom-hero__form > button');
let buttonLastText = "> Envoyer";
function showStatus(text) {
	formButton.innerHTML = "<div><span>" + buttonLastText + "</span><span>" + text + "</span></div>";
	formButton.classList.add("shift");
	buttonLastText = text;
}









