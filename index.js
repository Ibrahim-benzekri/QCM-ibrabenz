let tableQst = [
    {
        question: "what is the most popular code language in 2022 ?",
        a:"C++",
        b:"Python",
        c:"JavaScript",
        d:"C#",
        correct: "Python",
    },

    {
        question: "who is the richest person on earth ?",
        a:"Gautam Adani",
        b:"Bill Gates",
        c:"Jeff Bezos",
        d:"Warren Buffett",
        correct: "Gautam Adani",
    },
    {
        question: "when Cristiano was born?",
        a:"1990",
        b:"1975",
        c:"1980",
        d:"1985",
        correct: "1985",
    },
    {
        question: "How much is 2+2",
        a:"2",
        b:"0",
        c:"4",
        d:"22",
        correct: "4",
    },
    {
        question: "how old is ibrahim",
        a:"19",
        b:"20",
        c:"18",
        d:"21",
        correct: "20",
    },

];

let score = 0;
let current = 0;
let qst = document.getElementById("qst");
let checks = document.querySelectorAll(".check");
let c1 = document.getElementById("choice1");
let c2 = document.getElementById("choice2");
let c3 = document.getElementById("choice3");
let c4 = document.getElementById("choice4");
initialize();
function initialize(){
    qst.textContent = tableQst[current].question;
    c1.innerHTML = tableQst[current].a;
    c2.innerHTML = tableQst[current].b;
    c3.innerHTML = tableQst[current].c;
    c4.innerHTML = tableQst[current].d;
}

function end(){
    c1.style.display = "none";
    c2.style.display = "none";
    c3.style.display = "none";
    c4.style.display = "none";
    submit.style.display = "none";
    checks.forEach(chek => chek.style.display = "none");
    qst.textContent = `Your score is ${score}`;
}

function findLable(el) {
    var idVal = el.id;
    labels = document.getElementsByTagName('label');
    for( var i = 0; i < labels.length; i++ ) {
       if (labels[i].htmlFor == idVal)
            return labels[i].textContent;
    }
 }

let submit = document.getElementById("submit");
submit.addEventListener("click",next);
let x1 = document.getElementById("i1");
let x2 = document.getElementById("i2");
let x3 = document.getElementById("i3");
let x4 = document.getElementById("i4");

function next(){
    if(x1.checked && findLable(x1)==tableQst[current].correct){
        current+=1;
        score+=1;
        x1.checked = false;
        if(current>4){
            end();
        }else{
            initialize();
        } 
    }else if(x2.checked && findLable(x2)==tableQst[current].correct){
        current+=1;
        score+=1;
        x2.checked = false;
        if(current>4){
            end();
        }else{
            initialize();
        } 
    }else if(x3.checked && findLable(x3)==tableQst[current].correct){
        current+=1;
        score+=1;
        x3.checked = false;
        if(current>4){
            end();
        }else{
            initialize();
        } 
    }else if(x4.checked && findLable(x4)==tableQst[current].correct){
        current+=1;
        score+=1;
        x4.checked = false;
        if(current>4){
            end();
        }else{
            initialize();
        } 
    }
}

