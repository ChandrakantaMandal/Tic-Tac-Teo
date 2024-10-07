let boxes=document.querySelectorAll(".box");
let resetBut=document.querySelector("#reset");
let newGame=document.querySelector("#new-game");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;
const winPattrn=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[6,7,8],
[3,4,5]
];
const resetGame=()=>{
    turn0=true;
    enableBox();
    msgContainer.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    })
});
const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText= `Congratulation Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox()
};

const checkWinner=()=>{
// chack draw
    let filledBoxes = 0;
  for (let box of boxes) {
    if (box.innerText !== "") {
      filledBoxes++;
    }
  }
  // If all boxes are filled, it's a draw
  if (filledBoxes === 9) {
    msg.innerText = `It's a draw!`;
    msgContainer.classList.remove("hide");
    disableBox();
    return; // Exit the function after declaring a draw
  }
    //chack winning conditions
    for(let patten of winPattrn){
        let pos1val=boxes[patten[0]].innerText;
        let pos2val=boxes[patten[1]].innerText;
        let pos3val=boxes[patten[2]].innerText;
        if (pos1val !="" && pos2val!="" && pos3val != ""){
            if(pos1val ===pos2val && pos2val === pos3val ){
                showWinner(pos1val)
            }
        }
    }
};
newGame.addEventListener("click",resetGame);
resetBut.addEventListener("click",resetGame);
