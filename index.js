let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let slimeHealth = 15;
let fbHealth = 60;
let dragonHealth = 300;

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const text = document.querySelector('#text');
const monsterStats = document.querySelector('#monsterStats');
const healthText = document.querySelector('#healthText');
const goldText = document.querySelector('#goldText');
const xpText = document.querySelector('#xpText');
const monsterName = document.querySelector('#monsterName');
const monsterHealth = document.querySelector('#monsterHealth');
const slimeAtkDmg = 10;
const fbAtkDmg = 40;
const dragonDmg = 100;
const slimeXP = 2;
const slimeGold = 13;
const fbXP = 5;
const fbGold = 26;

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon; 

function healthUp() {
    if (gold == 0) {
        return;
    }
    health += 10;
    gold -= 10;
    if (gold < 0) {
        gold += 10;
        return;
    }
    healthText.innerText = health;
    goldText.innerText = gold;
}

function weaponUp() {
    if (gold < 30) {
        return;
    }
    gold -= 30;
    goldText.innerText = gold;
    currentWeapon += 1;
    if (currentWeapon == 1) {
        text.innerText = "You have purchased a broadsword. Your offensive capabilities have increased.";
    }
    if (currentWeapon == 2) {
        text.innerText = "You have purchased a spear. Your offensive capabilities have further increased."
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function atkDmg() {
    if (currentWeapon == 0) {
        return randomIntFromInterval(1, 10);
    }
    if (currentWeapon == 1) {
        return randomIntFromInterval(10, 20);
    }
    if (currentWeapon == 2) {
        return randomIntFromInterval(20, 30);
    }
}

function goKillScreen() {
    monsterStats.style.display="none";
    button1.innerText = "Go to Town Square";
    button2.innerText = "Go to Town Square";
    button3.innerText = "Go to Town Square";
    text.innerText = "The monster screams \"Arg!\" as it dies. You gain experience points and find gold."
    xpText.innerText = xp;
    goldText.innerText = gold;
    button1.onclick = goTown;
    button2.onclick = goTown;
    button3.onclick = goTown;
}

function goDeathScreen() {
    monsterStats.style.display="none";
    text.innerText = "You Die."
    currentWeapon = 0;
    health = 100;
    gold = 50;
    xp = 0;
    slimeHealth = 15;
    fbHealth = 60;
    dragonHealth = 300;
    button1.innerText = "REPLAY?";
    button2.innerText = "REPLAY?";
    button3.innerText = "REPLAY?";
    button1.onclick = goTown;
    button2.onclick = goTown;
    button3.onclick = goTown;
}

function goWinScreen() {
    monsterStats.style.display="none";
    text.innerText = "You Win!!!."
    currentWeapon = 0;
    health = 100;
    gold = 50;
    xp = 0;
    slimeHealth = 15;
    fbHealth = 60;
    dragonHealth = 300;
    button1.innerText = "REPLAY?";
    button2.innerText = "REPLAY?";
    button3.innerText = "REPLAY?";
    button1.onclick = goTown;
    button2.onclick = goTown;
    button3.onclick = goTown;
}

function atkMon(monDmg, monHealth, monXP, monGold) {
    var damage = atkDmg();

    if (randomIntFromInterval(1,4) == 1) {
        damage = 0;
        text.innerText = "Your weapon breaks!"
    }
    if (damage >= monHealth) {
        if (monDmg == 100) {
            goWinScreen();
        }
        xp += monXP;
        gold += monGold;
        slimeHealth = 15;
        fbHealth = 60;
        goKillScreen();
    }
    else {
        health -= monDmg;
        healthText.innerText = health;
        if (health <= 0) {
            goDeathScreen();
        }
        monHealth -= damage;
        monsterHealth.innerText = monHealth;
    }
    if (monDmg == slimeAtkDmg) {
        slimeHealth = monHealth;
    }
    else if (monDmg == fbAtkDmg) {
        fbHealth = monHealth;
    }
    else {
        dragonHealth = monHealth;
    }
}

function dodge(monster) {
    text.innerText = "You dodge the attack of the " + monster + ".";
}

function goTown() {
    monsterStats.style.display="none";
    button1.innerText = "Go to Store";
    button2.innerText = "Go to Cave";
    button3.innerText = "Fight Dragon";
    text.innerText = "You are in the town square. You see the sign that says \"Store\""
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    goldText.innerText = gold;
    healthText.innerText = health;
    xpText.innerText = xp;
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
    button2.onclick = fightFb;
    button3.onclick = goTown;
}

function fightDragon() {
    button1.innerText = "Attack";
    button2.innerText = "Dodge";
    button3.innerText = "Run";
    text.innerText = "You are fighting a monster.";
    button1.onclick = function() {
        atkMon(dragonDmg, dragonHealth, 0, 0);
    }
    button2.onclick = function() {
        dodge("dragon");
    }
    button3.onclick = goTown;
    monsterStats.style.display="block";
    monsterHealth.innerText = dragonHealth;
    monsterName.innerText = 'Dragon';
}

function fightSlime() {
    button1.innerText = "Attack";
    button2.innerText = "Dodge";
    button3.innerText = "Run";
    text.innerText = "You are fighting a monster.";
    button1.onclick = function() {
        atkMon(slimeAtkDmg, slimeHealth, slimeXP, slimeGold);
    }
    button2.onclick = function() {
        dodge("slime");
    }
    button3.onclick = goTown;
    monsterStats.style.display="block";
    monsterHealth.innerText = slimeHealth;
    monsterName.innerText = 'Slime';
}

function fightFb() {
    button1.innerText = "Attack";
    button2.innerText = "Dodge";
    button3.innerText = "Run";
    text.innerText = "You are fighting a monster.";
    button1.onclick = function() {
        atkMon(fbAtkDmg, fbHealth, fbXP, fbGold);
    }
    button2.onclick = function() {
        dodge("fanged beast");
    }
    button3.onclick = goTown;
    monsterStats.style.display="block";
    monsterHealth.innerText = fbHealth;
    monsterName.innerText = 'Fanged Beast';
}