const buttons=document.querySelectorAll(`.buttons`)
const body=document.querySelector(`body`)

buttons.forEach(function(button){
    button.addEventListener(`click`,function(e){
       
        if(e.target.id===`grey`){
            body.style.backgroundColor=e.target.id;
            body.style.color=`white`;
        }
        if(e.target.id===`red`){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id===`green`){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id===`purple`){
            body.style.backgroundColor=e.target.id;
        }

    })
})