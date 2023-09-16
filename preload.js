
window.onload = function() {
    document.body.classList.remove('unloaded');
    document.body.classList.add('loaded');
};

const imageURLsToPreload = [
    "./media/hero1.png",
    "./media/hero2.png",
    "./media/hero3.png",
    "./media/hero4.png",
    "./media/portrait.png",
    "./media/thumbnail1.png",
    "./media/thumbnail1B.png",
    "./media/thumbnail2.png",
    "./media/thumbnail2B.png",

    "./media/burger.png",
    "./media/cross.png",
    "./media/house.png",
    "./media/magnify.png",
    "./media/mail.png",
    "./media/linkedin.png",
    "./media/github.png",
    "./media/play.png",
    "./media/code.png",
    "./media/darklight.png",

    "./media/skills/c.png",
    "./media/skills/css.png",
    "./media/skills/git.png",
    "./media/skills/html.png",
    "./media/skills/js.png",
    "./media/skills/mongodb.png",
    "./media/skills/nodejs.png",
    "./media/skills/python.png",
    "./media/skills/react.png",
    "./media/skills/sass.png",
]

for (let url of imageURLsToPreload) {
    const image = new Image();
    image.src = url;
}








