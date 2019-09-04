class Characters {
    constructor(image, name, points ){
        this.image = image;
        this.name = name;
        this.points = points;

    }
}

class items {
    constructor(name, pointI, type){
        this.name = name;
        this.pointI = pointI;
        this.type = type;
    }
}

const item1 = new items("Kunai Knife", 50, "damage"); 
const item2 = new items("Paper Bomb", 40, "damage");
const item3 = new items("Shuriken", 60, "damage");
const item4 = new items("Food Pills", 50, "defense");

const itemsArray=[item1, item2, item3, item4];




function printCharacter(imageP, nameP, pointsP){
   document.getElementById('character').innerHTML= `<img src="${imageP}" width=30% align="center" alt="Chosen Character"> <br> <h3> ${nameP} </h3>  <h3> Points = ${pointsP}</h3> ` ;

}

function printItem(imageIP, nameIP, damage){
    document.getElementById("weapon").innerHTML = `<img src="${imageIP}" width=43.5% align="center" alt="Chosen Weapon"> <br> <h3> ${nameIP} </h3> <h3> Damage = ${damage}</h3>  `;
}


let startpoints = 100;
const Sasuke = new Characters("Sasuke.png", "Sasuke", startpoints);
const Naruto = new Characters("Naruto.png", "Naruto", startpoints);
const Sakura = new Characters("Sakura.png", "Sakura", startpoints);

const CharactersArray=[Sasuke, Naruto, Sakura];

let selection = prompt("Select a character: \n 0-Sasuke \n 1-Naruto \n 2-Sakura");    

switch (selection) {
    case '0':
        printCharacter(CharactersArray[selection].image, CharactersArray[selection].name, CharactersArray[selection].points);
        break;
    case '1':
        printCharacter(CharactersArray[selection].image, CharactersArray[selection].name, CharactersArray[selection].points);
        break;
    case '2':
        printCharacter(CharactersArray[selection].image, CharactersArray[selection].name, CharactersArray[selection].points);
        break;
    default:
        alert("Please select a valid option.");
        break;
}



let itemSelection = prompt("Please select an item: \n 0-Kunai Knife \n 1-Paper Bomb \n 2-Shuriken \n 3-Food Pills ");


switch (itemSelection) {
    case '0':
        printItem(itemsArray[itemSelection].imageIP, itemsArray[itemSelection].name, itemsArray[itemSelection].pointI);
        break;
    case '1':
        printItem("paperbomb.jpg", "Paper Bomb", 40);
        break;
    case'2':
        printItem("shuriken.jpg", "Shuriken", 60);
        break;
    case '3':
        printItem("foodpills.png", "Food Pills", 50);
        break;
    default:
        alert("Please select a valid option.");
        break;
}



for(let i=0; i<3; i++)
{
    if(itemsArray[itemSelection].type==="damage") {
        let updatePoints = CharactersArray[selection].points-itemsArray[itemSelection].pointI;
        CharactersArray[selection].points=updatePoints;
        printCharacter(CharactersArray[selection].image, CharactersArray[selection].name, updatePoints );
    }
    else {
        let updatePoints = CharactersArray[selection].points+itemsArray[itemSelection].pointI;
        CharactersArray[selection].points=updatePoints;
        printCharacter(CharactersArray[selection].image, CharactersArray[selection].name, updatePoints);
    }
}


if(CharactersArray[selection].name>100) {
    document.getElementById('character').innerHTML= `<h2> G A M E   O V E R</h2> <h3> ${CharactersArray[selection].name} WON!!!  `
}
else {
    document.getElementById('character').innerHTML= `<h2> G A M E   O V E R</h2> <h3> ${CharactersArray[selection].name} Lost! `
}
