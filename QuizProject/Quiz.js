let quiz=[{"category":"Entertainment: Television","type":"multiple","difficulty":"medium","question":"From what show is the character &quot;James Doakes&quot;? ","correct_answer":"Dexter","incorrect_answers":["Marvel&#039;s Daredevil","Boardwalk Empire","The Walking Dead"]},{"category":"Entertainment: Television","type":"multiple","difficulty":"easy","question":"In the TV show &#039;M*A*S*H&#039;, what was the nickname of Corporal Walter O&#039;Reilly?","correct_answer":"Radar","incorrect_answers":["Hawkeye","Hot Lips","Trapper"]},{"category":"Entertainment: Film","type":"boolean","difficulty":"easy","question":"The 2010 film &quot;The Social Network&quot; is a biographical drama film about MySpace founder Tom Anderson.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Entertainment: Music","type":"boolean","difficulty":"medium","question":"Norwegian producer Kygo released a remix of the song &quot;Sexual Healing&quot; by Marvin Gaye.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Geography","type":"multiple","difficulty":"hard","question":"What is the most populous Muslim-majority nation in 2010?","correct_answer":"Indonesia","incorrect_answers":["Saudi Arabia","Iran","Sudan"]},{"category":"Entertainment: Video Games","type":"boolean","difficulty":"easy","question":"Ana was added as a new hero for the game Overwatch on July 19th, 2016.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"hard","question":"In Animal Crossing: New Leaf, which of these paintings from Redd&#039;s Art Gallery is always genuine?","correct_answer":"Warm Painting","incorrect_answers":["Jolly Painting","Neutral Painting","Wistful Painting"]},{"category":"Entertainment: Japanese Anime & Manga","type":"multiple","difficulty":"medium","question":"What was studio Trigger&#039;s first original long-form animated series for television?","correct_answer":"Kill la Kill","incorrect_answers":["Kiznaiver","Inferno Cop","Gurren Lagann"]},{"category":"Entertainment: Video Games","type":"boolean","difficulty":"easy","question":"&quot;Metal Gear Solid 3: Snake Eater&quot; was released in 2004.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Entertainment: Comics","type":"multiple","difficulty":"hard","question":"When Batman trolls the online chat rooms, what alias does he use?","correct_answer":"JonDoe297","incorrect_answers":["iAmBatman","BWayne13","BW1129"]}]


const renderResult=(answer,yours)=>{
    let correct=answer.filter(x=>{
        if(x.answer==='true'||x.answer==='false'){
       return x.answer===yours[x.i]  
        }
        else{
       return yours.includes(x.answer)
        }
    })
    let score=(correct.length/answer.length)*100
    const hOne=document.createElement('h1')
    hOne.textContent=`Score:${score}%`
    document.querySelector('#big-card').append(hOne)
    console.log(correct)
    console.log(correct.length/answer.length)
    
    }
//we will be manipulating this object
const key={
    value:0,
    yourAnswer:[]
}

let correctAnswers=[]
correctAnswers=quiz.map((x,i)=>{
if(x.type==='multiple'){
    return {answer:x.correct_answer,i:[i]}
}
else{
    return {answer:x.correct_answer,i:[i]}
}
})
console.log(correctAnswers)
let answerChoices=quiz.map((x,i)=>{
    return [].concat(x.correct_answer).concat(x.incorrect_answers)
})



const startButton=document.querySelector('#start-quiz')
const quizDiv=document.querySelector('.question-container')
const answerDiv=document.querySelector('.answers-container')


startButton.addEventListener('click',(e)=>{

    renderDisplay()
    document.querySelector('.Clear').innerHTML=''
    
})

const renderDisplay=()=>{
    if(key.value===quiz.length){
        document.querySelector('#big-card').innerHTML='' 
       
        renderResult(correctAnswers,key.yourAnswer)
    return null}
//find for each array that will be displayed
let value=quiz.find(x=>{

    return x===quiz[key.value]
})
let answers=[].concat(value.correct_answer).concat(value.incorrect_answers)
quizDiv.innerHTML=''
const question=document.createElement('h1')
value.question=symbolKiller(value.question)
question.textContent=symbolKiller(value.question)
quizDiv.append(question)
answerDiv.innerHTML=''
answers.forEach(x=>{
    const buttonChoice=document.createElement('button')
    
    buttonChoice.textContent=symbolKiller(x)
    answerDiv.append(buttonChoice)
    buttonChoice.addEventListener('click',(e)=>{
        if(key.value<quiz.length){
            key.yourAnswer.push(e.target.innerText)
            key.value++
            renderDisplay()
        }
    })
})
}




