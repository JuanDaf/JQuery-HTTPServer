const btn =  document.getElementById("btn")
const txt = document.getElementById("texto")

btn.addEventListener("click",()=>{
    txt.innerText = "Click acá"
})

const btn2 =  document.querySelector("#btn")

btn2.addEventListener("click",()=>{
    console.log("Hola, estoy utilizando jQuery")
})