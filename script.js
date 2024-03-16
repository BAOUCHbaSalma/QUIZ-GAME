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


]


let currentQuestion=0;
let score=0;
let ss=document.getElementById("sc")
let num=document.getElementById("numberqst")
let opt = document.getElementById("opt")
let question=document.getElementById('qst');


let i=0
function getData(){
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
}
 getData();


function Change(){
    document.querySelectorAll(".rpns").forEach((e)=>{
        e.addEventListener("click",function(){
            if(quiz[i].Option.length>0 && i<quiz[i].Option.length -1){
                opt.innerHTML=""
            }
            if(this.innerHTML == quiz[i].Correcte){
                score +=10;
                ss.innerText= score;
            }
             i++;
           getData();
            Change();
        })
    })

     }



Change();