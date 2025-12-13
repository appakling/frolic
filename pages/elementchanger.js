const game1 = document.getElementById("1")
const game2 = document.getElementById("2")
const game3 = document.getElementById("3")

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

game2.addEventListener('click', function(){
    info.textContent = "Super Meat Boy is a 2010 platform game developed and published by Team Meat. It is the first official game in the Super Meat Boy series, following the Flash prototype. It stars Meat Boy, who attempts to rescue his girlfriend Bandage Girl from Dr. Fetus.";
    link.href = "./flash/pages/meatboy.html";
    title2.textContent = "Super Meat Boy";
    creator.textContent = "by Team Meat and Blitworks";
    image.id = "meatboy";
    title.textContent = "frolic/meat-boy";
});

game3.addEventListener('click', function(){
    info.textContent = "Run 3 is a platform game created by Joseph Cloutier (AKA 'player_03'). It was originally released on Kongregate, but now only Coolmath Games and poki.com carry updated versions. It is the third in the series, and was released in June of 2014, though it is unfinished and being regularly updated. Run 1 and Run 2, the first two games in the series, were released in 2008 and 2011 respectively. It is also available on iOS and Android, on which it is titled 'run' as the first two games were not released on mobile.";
    link.href = "./flash/pages/run3.html";
    title2.textContent = "Run 3";
    creator.textContent = "by Joseph Cloutier";
    image.id = "run3";
    title.textContent = "frolic/run3";
});