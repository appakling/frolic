const game1 = document.getElementById("1")

const title = document.getElementById("frolic-title");
const info = document.getElementById("game-info");
const title2 = document.getElementById("title-2");
const creator = document.getElementById("game-creator");
const link = document.getElementById("game-link");
const image = document.getElementById("image");

const Pico8button = document.getElementById("Pico8");
const testbutton = document.getElementById("test");

const titletext = title.textContent;

Pico8button.addEventListener('change', function(){
    if (this.checked) {
        title.textContent = "frolic/Pico8";
    } else {
        title.textContent = titletext;
    }
});
testbutton.addEventListener('change', function(){
    if (this.checked) {
        title.textContent = "frolic/test";
    } else {
        title.textContent = titletext;
    }
});

function tboiImage() {

}

game1.addEventListener('click', function(){
    info.textContent = "The Binding of Isaac: Rebirth is a randomly generated action RPG shooter with heavy roguelike elements. Players will accompany Isaac on a quest to escape his mother, facing off against droves of mysterious creatures, discovering secrets, and fighting fearsome bosses. Along the way, Isaac can find bizarre treasures that change his form and give him super-human abilities. But it won't be easy!";
    link.href = "./flash/pages/tboi.html";
    title2.textContent = "The Binding Of Isaac";
    creator.textContent = "by Edmund McMillen and Florian Himsl";
    image.id = "tboi";
    title.textContent = "frolic/tboi";
});