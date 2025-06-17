const boxes=document.querySelectorAll(".box");
let ResetBtn=document.querySelector("#ResetBtn");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");
let newGame=document.querySelector("#newGame");

const winningPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let turn0= true; //player0's turn

let count=0;
boxes.forEach((box)=>{

    box.addEventListener("click",() => {
        console.log("clicked!!");
            if(turn0){
                turn0=false;
                box.innerText="O";
            }
            else{
                turn0=true;
                box.innerText="X";
            }
            count=count+1;
        box.style.backgroundColor="#7a7272";
        box.disabled=true;
        checkWinner();
    });
});

const disable=()=>{
    boxes.forEach((box)=> {box.disabled=true;}) ;
}

const enableBtn=()=>{
    boxes.forEach((box)=> {box.disabled=false;});
}

const WinningMsg=(winner)=>{
    msg.innerText=`Winner is ${winner} !`;
    document.getElementById("msg").classList.add("winner-animate");
    msgContainer.classList.remove("hide");
}

const Draw=()=>{
    msg.innerText="DRAW";
    msgContainer.classList.remove("hide");
    disable();
    ResetBtn.classList.add("hide")
}

const checkWinner= () => {
    let winnerExist=false;
    for(let pattern of winningPatterns){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;

        if(val1!=="" && val2!=="" && val3!==""){
            if(val1==val2 && val2 == val3){
                winnerExist=true;count=0;
                WinningMsg(val1);
                disable();
                ResetBtn.classList.add("hide");
            }
        }
    }

    if(!winnerExist && count==9 ) {count=0;Draw();}
    
};

ResetBtn.addEventListener("click",()=>{
    enableBtn();
    for(let box of boxes ){
        box.innerText="";
        box.style.backgroundColor="#e7e2e2";
    }
    msgContainer.classList.add("hide");
});



newGame.addEventListener("click",()=>{
    enableBtn();
    for(let box of boxes ){
        box.innerText="";
        box.style.backgroundColor="#e7e2e2";
    }
        ResetBtn.classList.remove("hide");

        msgContainer.classList.add("hide");

});
