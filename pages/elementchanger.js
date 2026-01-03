const game1 = document.getElementById("1")
const game2 = document.getElementById("2")
const game3 = document.getElementById("3")
const game4 = document.getElementById("4")
const game5 = document.getElementById("5")
const game6 = document.getElementById("6")
const game7 = document.getElementById("7")
const game8 = document.getElementById("8")

const title = document.getElementById("frolic-title");
const info = document.getElementById("game-info");
const info2 = document.getElementById("extra-info");
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
    info2.textContent = ""
    link.href = "./flash/pages/tboi.html";
    title2.textContent = "The Binding Of Isaac";
    creator.textContent = "by Edmund McMillen and Florian Himsl";
    image.src = "../data/images/the-binding-of-isaac.jpg";
    title.textContent = "frolic/tboi";
});

game2.addEventListener('click', function(){
    info.textContent = "Super Meat Boy is a 2010 platform game developed and published by Team Meat. It is the first official game in the Super Meat Boy series, following the Flash prototype. It stars Meat Boy, who attempts to rescue his girlfriend Bandage Girl from Dr. Fetus.";
    info2.textContent = ""
    link.href = "meatboy.html";
    title2.textContent = "Super Meat Boy";
    creator.textContent = "by Team Meat and Blitworks";
    image.src = "../data/images/super-meat-boy.jpg";
    title.textContent = "frolic/meat-boy";
});

game3.addEventListener('click', function(){
    info.textContent = "Run 3 is a platform game created by Joseph Cloutier (AKA 'player_03'). It was originally released on Kongregate, but now only Coolmath Games and poki.com carry updated versions. It is the third in the series, and was released in June of 2014, though it is unfinished and being regularly updated. Run 1 and Run 2, the first two games in the series, were released in 2008 and 2011 respectively. It is also available on iOS and Android, on which it is titled 'run' as the first two games were not released on mobile.";
    info2.textContent = ""
    link.href = "./flash/pages/run3.html";
    title2.textContent = "Run 3";
    creator.textContent = "by Joseph Cloutier";
    image.src = "../data/images/run-3.jpg";
    title.textContent = "frolic/run3";
});

game4.addEventListener('click', function(){
    info.textContent = "After a long evening of playing cards at the local tavern, you head off home to get some sleep, but something goes wrong. You suddenly find yourself trapped in a nightmarish dungeon, which is infested with fiends, monsters and wicked witches intent on making sure you stay trapped in the dungeon forever. As you suddenly seem unable to find any exits, your amulet warns you that a strong curse has been placed on the dungeon by these same monsters. Armed only with your trusty dagger, will you be able to eliminate all the monsters, dispel the curse that prevents you from leaving and exit the dungeon, or will you suffer the wrath of the Donsols?";
    info2.textContent = "This is a PICO-8 port of Donsol by John Eternal and Hundred Rabbits, a dungeon-crawler game built around a deck of 54 cards.";
    link.href = "./pico/pages/donsol.html";
    title2.textContent = "Donsol";
    creator.textContent = "by rnd";
    image.src = "../data/images/donsol.png";
    title.textContent = "frolic/Pico8/donsol";
});

game5.addEventListener('click', function(){
    info.textContent = "A simple fighting game. You start on the -9 floor. Fight your way to the 1 floor.";
    info2.textContent = ""
    link.href = "./pico/pages/b9f.html";
    title2.textContent = "B9F";
    creator.textContent = "by shituniao";
    image.src = "../data/images/bf9.jpg";
    title.textContent = "frolic/Pico8/b9f";
});

game6.addEventListener('click', function(){
    info.textContent = "A hardcore platformer by Matt Thorson and Noel Berry (me), that we made in 4 days.";
    info2.textContent = "We used pretty much all our resources for this. 8186/8192 code, the entire spritemap, the entire map, and 63/64 sounds";
    link.href = "./pico/pages/celeste.html";
    title2.textContent = "Celeste";
    creator.textContent = "by Matt Thorson and Noel Berry";
    image.src = "../data/images/celeste.png";
    title.textContent = "frolic/Pico8/celeste";
});

game7.addEventListener('click', function(){
    info.textContent = "A boss fight against a charming opponent!";
    info2.textContent = ""
    link.href = "./pico/pages/j1b.html";
    title2.textContent = "Just One Boss";
    creator.textContent = "by bridgs";
    image.src = "../data/images/just-one-boss.png";
    title.textContent = "frolic/Pico8/j1b";
});

game8.addEventListener('click', function(){
    info.textContent = "Porklike is a minimalistic, classic Roguelike made in the Pico-8 enigne. Enter the tower of Wurstlord. Can you make it to the top and steal his legendary Kielbasa? 9 floors of dangerous traps and enemies await you. Only if you move carefully and master your character's abilities will you become the champion of Porklike.";
    info2.textContent = "The music was composed by Sebastian Haßler. The environment art as well as the protagonist was inspired by the work of the pixel artist @pixelartm and used with their permission. The artwork of the enemies was inspired by the work of the pixel artist @kirai_s and used with their permission as well"
    link.href = "./pico/pages/porklike.html";
    title2.textContent = "porklike";
    creator.textContent = "by Krystman";
    image.src = "../data/images/porklike.jpg";
    title.textContent = "frolic/Pico8/porklike";
});