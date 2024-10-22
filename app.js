const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg");

let userScore=0;
let compScore=0;

let userscorepara=document.querySelector("#user-score");
let compscorepara=document.querySelector("#comp-score");


//Computer Choice

const gencompChoice=()=>
{
    const array=["rock","paper","scissor"];
    const idx=Math.floor(Math.random()*3);
    return array[idx];

}


//User Choice

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>
    {
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})

//Show Winner





//Play Game 

const showDraw=()=>
{
    
    msg.innerText="Game Was Draw.Play Again."
    msg.style.backgroundColor = "rgb( 255, 202, 212)";
}

const showWinner=(userWin,userchoice,compchoice)=>
{
    if(userWin)
    {
        userScore++;
        userscorepara.innerText=userScore;
        
        msg.innerText=`You win, your ${userchoice} beats ${compchoice}!`;
        msg.style.backgroundColor= "green";
    }
    else{
        
        compScore++;
        compscorepara.innerText=compScore;
        msg.innerText=`You Lose, ${compchoice} beats your ${userchoice} !`;
        msg.style.backgroundColor= "red";
    }
}

const playgame=(userchoice)=>{
    
    const compchoice=gencompChoice();
    

    if(userchoice===compchoice)
    { //Draw Condition
        showDraw();
        
    }

    else{
        let userWin=true;

        if(userchoice==="rock")
        {
            userWin=compchoice==="paper"?false:true;

        }

        else if(userchoice==="paper")
        {
            userWin=compchoice==="rock"?true:false;
        }

        else if(userchoice==="scissor")
        {
            userWin=compchoice==="rock"?false:true;
        }

        showWinner(userWin,userchoice,compchoice);


    }

}




