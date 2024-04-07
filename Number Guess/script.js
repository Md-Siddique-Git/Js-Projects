let userInput=document.querySelector(`#userinput`)
const submit=document.querySelector(`form`)

let gues=document.querySelector(`#gues`)
let guessed_num=[1 ]
let playgame=true
if (playgame) {
    submit.addEventListener(`click`,function(e){
        e.preventDefault()
        const userinput=parseInt(userInput.value)
        guessed_num.push(userinput)
        gues.innerHTML=`Your guesd numbers are ${[guessed_num]}`
        userInput.value=''

    })
    
} 