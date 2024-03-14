let height=document.getElementById("height");
let weight=document.getElementById("weight");
let bmiShow=document.getElementById("bmi");
let calculate=document.getElementById("calculate");
let relode=document.getElementById("relode");


calculate.addEventListener("click",()=>{
    let meter=height.value*0.3048;
    let squareMeter=meter*meter;
    let bmical=(weight.value/squareMeter).toFixed(2)
    console.log(bmical)
    bmiShow.innerHTML="your BMI is" + bmical;

    if(bmical<18){
       let val= document.getElementById("category")
       val.innerHTML="you are underweight"

    }
    else if(bmical>=18 && bmical<24){
        let val=document.getElementById("category")
        val.innerHTML="you are above weight"
    }
    else if(bmical>=30){
        let val=document.getElementById("category")
        val.innerHTML="you are abesse"
    }

})

relode.addEventListener("click",()=>{
    window.location.reload();
})


