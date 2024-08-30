let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbutton");
let newBtn = document.querySelector("#Newbtn");
let message = document.querySelector(".msg");
let winner = document.querySelector("#Winner");

let turnO = true;
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", () => {
        if (!boxes[i].classList.contains("disabled")) {

            if (turnO) {
                boxes[i].innerText = "O";
            } else {
                boxes[i].innerText = "X";
            }
            boxes[i].classList.add("disabled");
            turnO = !turnO;
            checkWinner();
        }
    });
}



const resetGame = () => {
    turnO = true;
    activateBoxes();
    message.classList.add("hide");
}


const activateBoxes = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.classList.remove("disabled");
    });
}


const disableBoxes = () => {
    boxes.forEach((box) => {
        box.classList.add("disabled");
    });
}


const showWinner = (winnerName) => {
    winner.innerText = `Congratulations! Winner is ${winnerName}`;
    message.classList.remove("hide");
    disableBoxes();
}


const checkWinner = () => {
    for (let pattern of winPattern) {
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if (posVal1 && posVal1 === posVal2 && posVal2 === posVal3) {
            showWinner(posVal1);
            return;
        }
    }

    if ([...boxes].every(box => box.innerText !== "")) {
        winner.innerText = "It's a draw!";
        message.classList.remove("hide");
        disableBoxes();
    }
}

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
