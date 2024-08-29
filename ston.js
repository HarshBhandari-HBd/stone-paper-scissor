let yourscore  = 0;
let compscore = 0;

const choices = document.querySelectorAll(".image-item");
// console.dir(choices[0]);
choices.forEach((choi)=>{

    choi.addEventListener("click",()=>
    {
        let userchoice = choi.getAttribute("id")
        winner(userchoice);
    })

})
function generate()
{  
    const arr = ["rock","paper","scissor"];
    let tem =  Math.floor(Math.random()*3);
    return arr[tem];
}

function draw()
{
     let c = document.querySelector("#msg");
     c.innerText ="Game Draw !! play again";
     c.style.backgroundColor = "red"
     c.style.color ="black"
}
function winner(userc)
{
   
     let tem = generate();

     console.log(tem,userc)

    let userwin =true;

    if(userc === tem)
        draw();
    else
    {
        if(tem === "rock")
        {
            userwin = userc==="paper"?true:false;

        }
        else if(tem === "paper")
        {
            userwin = userc ==="scissor"?true:false;

        }
        else if(tem === "scissor")
        {
            userwin = userc==="rock"?true:false;
        }
    

    
       if(userwin)
        yourscore++;
       else 
       compscore++;

       scoreupgrade();
       msgupgrade(userwin);

}
// console.log(yourscore,compscore)



       



}

function scoreupgrade()
{
    let c =  document.querySelector("#youscore");
    c.innerText = yourscore;
    let d =  document.querySelector("#compscore");
    d.innerText = compscore;
}


function msgupgrade(userwin)
{   
    let d= document.querySelector("#msg");
     if(userwin)
     {
        
        d.innerText = " YOU Win";
        d.style.backgroundColor = "yellow";
        d.style.color ="black";


     }
     else
     {
       d.innerText= "COMPUTER Win";
       d.style.backgroundColor = "aqua"

     }
}
