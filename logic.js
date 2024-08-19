let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset_game");
let winmsg=document.querySelector(".winmsg");
let msg = document.querySelector("#msg");
let newbtn=document.querySelector(".newgame");

let turn0=true;

let winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
];

const resetgame=()=>{
    turn0=true;
    enableboxes();
    winmsg.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("clicked");
        if(turn0){
            box.innerText="0";
            turn0=false;
        }else{
            box.innerText="x";
            turn0=true;
        }
        box.disabled=true;
        checkwin();
    });
});

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    };
}

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    };
}
const showwin=(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner} !`;
    winmsg.classList.remove("hide");
    disableboxes();
}

const checkwin=()=>{
    for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

    if(pos1val !="" &&  pos2val !="" && pos3val !=""){
        if(pos1val===pos2val && pos2val===pos3val){
            // console.log("winer");
            showwin(pos1val);
        }
    }
    }

};

resetbtn.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame);