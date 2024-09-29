document.querySelector("#play-btn").addEventListener("click", playGame);

function playGame() {
    humanScore = 0;
    robotScore = 0;
    document.querySelector("#main").classList.remove("hidden");
    document.querySelector("#play-btn").classList.add("hidden");
    startGame();
}

function startGame(){
    let humanChoice = "?"
    let robotsChoice = "?"
    document.querySelector("#rock-btn").addEventListener("click", selectRock);
    document.querySelector("#paper-btn").addEventListener("click", selectPaper);
    document.querySelector("#scissors-btn").addEventListener("click", selectScissors);
}

function selectRock(){
    humanChoice = "Rock";
    robotPlay();
}

function selectPaper(){
    humanChoice = "Paper";
    robotPlay();
}

function selectScissors(){
    humanChoice = "Scissors";
    robotPlay();
}

function robotPlay(){
    document.querySelector("#player-label").textContent=humanChoice;
    random = Math.floor(Math.random(1,4) * 3); 
    console.log(random)
    if(random == 1){
        robotsChoice = "Rock";
    } else if(random == 2){
        robotsChoice = "Paper";
    } else {
        robotsChoice = "Scissors";
    }
    document.querySelector("#bot-label").textContent=robotsChoice;
    calculateScore();
}

function calculateScore() {
    document.querySelector("#player-label").classList.remove("green");
    document.querySelector("#bot-label").classList.remove("green");
    document.querySelector("#player-label").classList.remove("amber");
    document.querySelector("#bot-label").classList.remove("amber");
    if(humanChoice == "Rock" && robotsChoice == "Scissors" || humanChoice == "Paper" && robotsChoice == "Rock" || humanChoice == "Scissors" && robotsChoice == "Paper") {
        humanScore += 1;
        document.querySelector("#player-label").classList.add("green");
        document.querySelector("#player-score").textContent=humanScore;
    } else if(humanChoice == robotsChoice){
        document.querySelector("#player-label").classList.add("amber");
        document.querySelector("#bot-label").classList.add("amber");
    } else{
        robotScore += 1;
        document.querySelector("#bot-label").classList.add("green");
        document.querySelector("#robot-score").textContent=robotScore;
    }
}
