let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let slimeHealth = 15;


const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const text = document.querySelector('#text');
const healthText = document.querySelector('#healthText');
const goldText = document.querySelector('#goldText');
const xpText = document.querySelector('#xpText');

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon; 

/*fix fightDragon not allowing multiple clicks*/

function healthUp() {
    if (parseInt(goldText.innerText) == 0) {
        return;
    }
    healthText.innerText = parseInt(healthText.innerText) + 10;
    goldText.innerText = parseInt(goldText.innerText) - 10;
}

function weaponUp() {
    if (parseInt(goldText.innerText) < 30) {
        return;
    }
    goldText.innerText = parseInt(goldText.innerText) - 30;
    currentWeapon += 1;
    console.log(currentWeapon);
}

function goTown() {
    document.getElementById("monsterStats").style.display="none";
    button1.innerText = "Go to Store";
    button2.innerText = "Go to Cave";
    button3.innerText = "Fight Dragon";
    text.innerText = "You are in the town sqaure. You see the sign that says \"Store\""
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
}

function goStore() {
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";
    text.innerText = "You enter the store";
    button1.onclick = healthUp;
    button2.onclick = weaponUp;
    button3.onclick = goTown;
}

function goCave() {
    button1.innerText = "Fight slime";
    button2.innerText = "Fight fanged beast";
    button3.innerText = "Go to town square";
    text.innerText = "You enter the cave. You see some monsters.";
    button1.onclick = fightSlime;
    button3.onclick = goTown;
}

function fightDragon() {
    button1.innerText = "Attack";
    button2.innerText = "Dodge";
    button3.innerText = "Run";
    text.innerText = "You are fighting a monster.";
    button3.onclick = goTown;
    document.getElementById("monsterStats").style.display="block";
}

function fightSlime() {
    button1.innerText = "Attack";
    button2.innerText = "Dodge";
    button3.innerText = "Run";
    text.innerText = "You are fighting a monster.";
    button3.onclick = goTown;
    document.getElementById("monsterStats").style.display="block";
}