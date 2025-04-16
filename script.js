
const config = document.querySelector(".config-container");
const answerOptions = document.querySelector(".answer-options");
const nextq = document.querySelector(".next");
const qnumber=document.querySelector(".status");
const display=document.querySelector(".duration");
const finalresult=document.querySelector(".result");
const quiz = document.querySelector(".quiz");


let correctcount=0;
const timelimit =10;
let currenttime=timelimit;
let quiztype = "programming";
let current =null;
let noq = 5;
let t=null;
const qhistory=[];


const Showresult=() => {
quiz.style.display="none";
finalresult.style.display="block";
const restext=`You Answered <b>${correctcount}</b> out of <b>${noq}</b> Questions Correctly.
    Great Effort!`;
    document.querySelector(".message").innerHTML=restext;
}

const resettimer = () =>{
    clearInterval(t);
    currenttime = timelimit;
    display.textContent=`${currenttime}s`;
}

const starttimer = () => {
    t= setInterval(()=>{
    currenttime--;
    display.textContent=`${currenttime}s`;
    if(currenttime<=0)
    {
        clearInterval(t);
        highlight();
        nextq.style.visibility = "visible";
        quiz.querySelector(".timer").style.background="#c31402"
        answerOptions.querySelectorAll(".answer-option").forEach(option=>option.style.pointerEvents ="none");
            nextq.style.visibility="visible";
    }
    },1000);
}

const getRandomQuestion = () =>{
    const questiontype= questions.find(cat => cat.category.toLowerCase() === quiztype.toLowerCase()).questions || [];
    if(qhistory.length>=Math.min(questiontype.length,noq))
    {
        return Showresult();
    }
    const available=questiontype.filter((_,index)=>!qhistory.includes(index));
    const randomquestion = available[Math.floor(Math.random()*questiontype.length)];
    qhistory.push(questiontype.indexOf(randomquestion));
    return randomquestion;
}

const highlight = () => {
    const correctoption=answerOptions.querySelectorAll(".answer-option")[current.correctAnswer];
    correctoption.classList.add("correct");
    const icon = `<span class="material-symbols-rounded">check_circle</span>`
    correctoption.insertAdjacentHTML("beforeend",icon);
}

const handleAnswer= (option,answerIndex) => {
        clearInterval(t);

        const iscorrect= current.correctAnswer===answerIndex;
        option.classList.add(iscorrect ? 'correct' :  'incorrect');
        !iscorrect ? highlight() : correctcount++;
        const icon = `<span class="material-symbols-rounded">${iscorrect ? 'check_circle' : 'cancel'}</span>`
        option.insertAdjacentHTML("beforeend",icon);
        answerOptions.querySelectorAll(".answer-option").forEach(option=>option.style.pointerEvents ="none");
        nextq.style.visibility="visible";
    }

const renderquestion = () => {
    current = getRandomQuestion();
    if(!current) return;
    console.log(current);
    resettimer();
    starttimer();
    answerOptions.innerHTML= "";
    nextq.style.visibility="hidden";
     quiz.querySelector(".timer").style.background="#32313C"
    document.querySelector(".question-text").textContent=current.question;
    qnumber.innerHTML =`<b>${qhistory.length}</b> of <b>${noq}</b> Questions `;

    current.options.forEach((option,index) =>
        {
            const li = document.createElement("li");
            li.classList.add("answer-option");
            li.textContent=option;
            answerOptions.appendChild(li);
            li.addEventListener("click", () => handleAnswer(li,index));
        });
}

const startquiz= () =>{
    config.style.display="none";
    quiz.style.display="block";
    quiztype = config.querySelector(".category-option.active").textContent;
    noq = parseInt(config.querySelector(".question-option.active").textContent);
    renderquestion();
}

document.querySelectorAll(".category-option, .question-option").forEach(option=>{
    option.addEventListener("click", ()=>{
        option.parentNode.querySelector(".active").classList.remove("active");
        option.classList.add("active");
    });
});

const resetquiz= () =>{
    resettimer();
    correctcount=0;
    qhistory.length=0;
    config.style.display="block";
    finalresult.style.display="none";
}

nextq.addEventListener("click",renderquestion);
document.querySelector(".try").addEventListener("click",resetquiz);
document.querySelector(".start").addEventListener("click",startquiz);