let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;

window.onload = function(){
    setGame();
}

function setGame(){
    //setting up the grid for the game board in the html
    //assigning each tile an id
    for(let i = 0; i < 9; i++){ //i goes from 0 to 8 (stops at 9)
        //<div id="0-8"></div>
        //Gonne use this id to know which tile was clicked on and see if the tile had the mole or not
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile)
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 1000)// 0000milliseconds = 0 sceonds
    setInterval(setPlant, 2000)//0000 milliseconds = 0 seconds
}

function getRandomTile(){
    //math.random --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole(){
    if(gameOver){
        return;
    }
    //clears the tags within the div tag when called again
    //clears the previous mole
    if(currMoleTile){
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./img/monty-mole.png";

    //getting the random num
    let num = getRandomTile();
    if(currPlantTile && currPlantTile.id == num){
        return;
    }

    //setting the current tile depending on the number (random tile)
    currMoleTile = document.getElementById(num);
    //putting the mole at the tile depending on the number
    currMoleTile.appendChild(mole);
}

function setPlant(){
    if(gameOver){
        return;
    }
    if(currPlantTile){
        currPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "./img/piranha-plant.png";

    let num = getRandomTile();
    if(currMoleTile && currMoleTile.id == num){
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile(){
    if(gameOver){
        return;
    }
    
    if(this == currMoleTile){
        score++;
        document.getElementById("score").innerText = score.toString(); //updates teh score
    }
    else if(this == currPlantTile){
        document.getElementById("score").innerText = "GAME OVER!\nFinal Score: " + score.toString();
        gameOver = true;
    }
}