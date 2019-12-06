const renderQuiz=(quizs)=>{
  
    quizs.forEach((x)=>{
        const p=document.createElement('p')
    
        p.textContent='Hello'
        quizDiv.append(p)
    })
    
    }


const createButton=(answer)=>{
    for (let i=0;i<4;i++){

    const b=document.createElement('button');
   switch(i){
       case 0:
           b.textContent='A';
           b.setAttribute('id','a-button')
           break;
           case 1:
                b.textContent='B';
                b.setAttribute('id','b-button')
                break;
                case 2:
                        b.textContent='C';
                        b.setAttribute('id','c-button')
                        break;
                        case 3:
                                b.textContent='D';
                                b.setAttribute('id','d-button')
                                break;
   }
   
console.log(b.id)
    answer.append(b)

}

}