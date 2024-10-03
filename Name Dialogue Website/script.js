let nameInput = document.getElementById("nameInput");
const dialogueButton = document.getElementById("dialogueButton");
let dialogue = document.getElementById("placeholder1");
const buttonArea = document.getElementsByClassName("buttonArea");

function grabName() {
    return userName = nameInput.value;
};
grabName();

function beginDialogue() {
    let userName = grabName();
    dialogue.innerText = `Hello, ${userName}, how are you today?`;

    let posButton = document.createElement("button");
    posButton.innerText = "I've been good! How about you?";

    let negButton = document.createElement("button");
    negButton.innerText = "I haven't been doing so great...";

    dialogue.parentNode.appendChild(posButton);
    dialogue.parentNode.appendChild(negButton);

    posNegResponse(posButton, negButton);
};

function posNegResponse(posButton, negButton) {
    posButton.addEventListener("click", function() {
        dialogue.innerText = "I've been pretty good, just trying to go with the flow I guess.";

        posButton.remove();
        negButton.remove();
    })
    negButton.addEventListener("click", function() {
        dialogue.innerText = "That's not good at all. How about we get something to eat and catch up?";

        posButton.remove();
        negButton.remove();
    })
};

dialogueButton.addEventListener("click", beginDialogue);