p1Name = ""
p2Name = ""

playerturn = p1Name;
emptyCells = 9
arrXO = [["", "", ""],
       ["", "", ""], 
       ["", "", ""]]

xo = document.querySelectorAll(".xo li");


function resetXO() {
    const xo = document.querySelectorAll(".xo li");
    xo.forEach((li)=>{li.textContent = ""
    li.classList.remove("xo-clicked");
});
    playerturn = p1Name;
    emptyCells = 9
    arrXO = [["", "", ""],
        ["", "", ""], 
        ["", "", ""]]
}

function visibleXO() {
    const whoseTurn = document.querySelector(".whose-turn");
    const xo = document.querySelector(".xo");
    whoseTurn.style.visibility = "visible";
    xo.style.visibility = "visible";

    const whoseWinner = document.querySelector(".whose-winner ");
    whoseWinner.style.display = "none";

    const whoseTurn_s = document.querySelector(".whose-turn span");
    whoseTurn_s.textContent = p1Name 
}


const playBtn = document.querySelector(".players-info .play-btn");
playBtn.addEventListener("click",() =>{
if(!p1Name && !p2Name){
const aside = document.querySelector("aside");
aside.style.display = "block";
}else{
    resetXO()
    visibleXO()
}
});



const chooseNameBtn = document.querySelector("aside form .play-btn");

chooseNameBtn.addEventListener("click",() =>{

const lable = document.querySelector("aside label");
const input = document.querySelector("aside input");
const aside = document.querySelector("aside");


if(!input.value && (!p1Name && !p2Name)){
    lable.textContent = "choose player1 name";
    alert(lable.textContent);
}
else if(input.value && (!p1Name && !p2Name)){
    p1Name = input.value;
    input.value = "";
    lable.textContent = "choose player2 name";
}
else if(!input.value && (!p2Name && p1Name)){
    alert(lable.textContent);
}
else if(input.value && (!p2Name && p1Name) && p1Name != input.value){
    p2Name = input.value;
    aside.style.display = "none";

    const player1 = document.querySelector(".players-info .p1Name");
    const player2 = document.querySelector(".players-info .p2Name");
    player1.textContent = p1Name;
     player2.textContent = p2Name;
    resetXO()
    visibleXO()
    
}
else if(input.value && (!p2Name && p1Name) && p1Name == input.value){
    alert("choose different name"); 
}
});


function winnerXO(currValue){
    const whoseWinner = document.querySelector(".whose-winner ");
    const whoseWinner_s = document.querySelector(".whose-winner span");
    whoseWinner.style.display = "block";
    whoseWinner_s.textContent = (currValue == "X")?p1Name:p2Name;
    
    const whoseTurn = document.querySelector(".whose-turn");
    const xo = document.querySelector(".xo");
    whoseTurn.style.visibility = "hidden";
    xo.style.visibility = "hidden";

    resetXO()

    return whoseWinner_s.textContent ;
}


function checkXO(){



    for(var i = 0; i < 3; i++) {

        if(arrXO[i][0]==arrXO[i][1] && arrXO[i][0]==arrXO[i][2] && arrXO[i][0]!=""){

            return winnerXO(arrXO[i][0]);
        }
        else if(arrXO[0][i]==arrXO[1][i] && arrXO[0][i]==arrXO[2][i] && arrXO[0][i]!=""){

            return winnerXO(arrXO[0][i]);
        }
    }

    if(arrXO[0][0]==arrXO[1][1] && arrXO[1][1]==arrXO[2][2] && arrXO[1][1]!=""){

        return winnerXO(arrXO[1][1]);
    }
    else if(arrXO[0][2]==arrXO[1][1] && arrXO[1][1]==arrXO[2][0] && arrXO[1][1]!=""){

        return winnerXO(arrXO[1][1]);
    }
    return "";
}



xo.forEach((li)=>{li.addEventListener("click",()=>{

    if(li.classList.contains("xo-clicked")){return undefined;}



    const whoseTurn = document.querySelector(".whose-turn");
    const whoseTurn_s = document.querySelector(".whose-turn span");

    li.classList.add("xo-clicked");
    let r=0;
    let c=0;

    if(playerturn == p1Name && emptyCells>0){
        li.textContent = "X";
        --emptyCells;

        r= Math.floor(li.dataset.index/3)
        c=li.dataset.index%3
        arrXO[r][c] = "X";

        playerturn = p2Name
        whoseTurn_s.textContent = p2Name 

    }else if(playerturn == p2Name && emptyCells>0){
        li.textContent = "O"
        --emptyCells;

        r= Math.floor(li.dataset.index/3)
        c=li.dataset.index%3
        arrXO[r][c] = "O";

        playerturn = p1Name
        whoseTurn_s.textContent = p1Name 
    }

    let winner = checkXO()
    if(winner=="" && emptyCells==0){
        
        const whoseWinner = document.querySelector(".whose-winner ");
        const whoseWinner_s = document.querySelector(".whose-winner span");
        const whoseWinner_h = document.querySelector(".whose-winner h1");
        
        whoseWinner.style.display = "block";
        whoseWinner_s.textContent="";
        whoseWinner_h.textContent="It's a Draw"


        const xo_ = document.querySelector(".xo");
        whoseTurn.style.visibility = "hidden";
        xo_.style.visibility = "hidden";
        resetXO()
    }


});});




