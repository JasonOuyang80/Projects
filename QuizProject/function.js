let stringOne ='From what show is the character &quot;James Doakes&quot;?'

const symbolKiller=(string)=>{
    let s=string
const symbols=[{b:/&#039;/g,
c:"'"},{b:/&quot;/g,
c:'"'}]
symbols.forEach(x=>{
    if(x.b.test(s)===true){
   s=s.replace(x.b,x.c)
    }
})

return s

}
symbolKiller(stringOne)