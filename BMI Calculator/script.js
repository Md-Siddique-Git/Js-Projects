const form=document.querySelector(`form`)

form.addEventListener(`submit`,function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector(`#height`).value)
    const weight=parseInt(document.querySelector(`#weight`).value)
    const result=document.querySelector(`#result`)

    if(height ==="" || height<0 || isNaN(height)){
        result.innerHTML=`Enter a vailid height ${height}`

    }
    else if(weight ==="" || weight<0 || isNaN(weight)){
        result.innerHTML=`Enter a vailid weight ${weight}`

    }
    else{
        result.innerHTML=(weight / ((height*height)/1000)).toFixed(2)
    }

    const calculate=document.querySelector(`#calculate`)
})
