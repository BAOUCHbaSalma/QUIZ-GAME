const quiz=[
    {
       Question:"Q.1 What is a correct syntax to output 'Hello World' in Java?",
       Option:[
          ' echo("Hello World")',
           'print("Hello World")',
           'System.out.print("Hello World")',
           'Console.WriteLine("Hello World")'

       ],
       Correcte:'System.out.print("Hello World")'
    },

   {
       Question:"Q.2 How do you create a variable with the numeric value 5?",
       Option:[
          ' x = 5',
           'int x = 5',
           'num x = 5',
           'float x = 5'

       ],
       Correcte:'int x = 5'
   },

   {
       Question:"Q.3 Which operator is used to add together two values?",
       Option:[
          ' The & sign',
           'The * sign',
           'The + sign',

       ],
       Correcte:'The + sign'
   },

   {
    Question:"Q.4 AAAAAAAAAAAAAAAAAAAAAAAAA",
    Option:[
        'A',
        'B',
        'C',


    ],
    Correcte:'A'
},
{
    Question:"Q.5 BBBBBBBBBBBBBBBB",
    Option:[
        'A',
        'B',
        'C',


    ],
    Correcte:'B'
},
{
    Question:"Q.6 CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
    Option:[
       'A',
        'B',
        'C',

    ],
    Correcte:'C'
},


]


let currentQuestion=0;
let score=0;
let ss=document.getElementById("sc");
let greenScore=document.getElementById("greenScore");
let redScore=document.getElementById("redScore");
let num=document.getElementById("numberqst");
let opt = document.getElementById("opt");
let question=document.getElementById('qst');
let green=0;
let red=0;



let i=0
function getData(){
    if(i<=quiz.length-1){

        question.innerHTML = quiz[i].Question;

    for(let j = 0 ; j < quiz[i].Option.length;j++){

        opt.innerHTML += 
        `
        <button id="rpns" class="rpns">${quiz[i].Option[j]}</button>
         `
         num.innerHTML =
         `
        <p >${i + 1}/${quiz.length}</p>
         `
    }
}else{
    LastAnswer();

} 

}
 getData();



function Change(){
    document.querySelectorAll(".rpns").forEach((e)=>{
        e.addEventListener("click",function(){

                opt.innerHTML=""
        
    
            if(this.innerHTML == quiz[i].Correcte){

                score +=10;
                green+=1
                greenScore.innerText=green+"/"+quiz.length;
                ss.innerText= score;
                // if(green>=3){

                //     titleScore.innerHTML="Congratulations";
                //     textScore.innerHTML="Congratulations on your impressive performance in the quiz game!";
            
                // }
                PartScore();
            }else{

                red+=1
                redScore.innerText=red+"/"+quiz.length;
                // if(red>3){

                //     titleScore.innerHTML="Good effort!";
                //     textScore.innerHTML="Good try! Keep practicing to improve next time!";
            
                // }
                PartScore();

            }
        
             i++;
           getData();
            Change();


        })
    })

     }





Change();





let titleScore=document.getElementById("titlescore");
let textScore=document.getElementById("textscore");
let Recommencer=document.getElementById("Recommencer");


function PartScore(){
    if(red<quiz.length/2){

        titleScore.innerHTML="Good effort!";
        textScore.innerHTML="Good try! Keep practicing to improve next time!";

    }
    
    if(green>=quiz.length/2){
        titleScore.innerHTML="Congratulations";
        textScore.innerHTML="Congratulations on your impressive performance in the quiz game!";
       

    }
}

function Reload(){
    Recommencer.onclick=function(){
        setTimeout(location.reload(),10)
    }
    

}
Reload();



function LastAnswer(){
    if (i>quiz.length-1){
        
        document.querySelector(".flc").style.display = "flex";
    }
}




document.querySelector(".button-start").addEventListener("click", function(){
    document.querySelector(".section-body").style.display = "flex";
    
})


document.getElementById("exit").addEventListener("click", function(){
    document.querySelector(".section-body").style.display = "none";
})

document.getElementById("continuer").addEventListener("click", function(){
    document.getElementById("debut").style.display = "flex";
    document.querySelector(".section-body").style.display = "none";
    document.getElementById("home").style.display = "none";
})






   

