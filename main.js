let principal = document.getElementById("principal")
let noticias = document.getElementById("noticias")
let nosotros = document.getElementById("nosotros")

principal.addEventListener("click", ()=>{
    document.getElementById("seccion-principal").style.display = "flex"
    document.getElementById("seccion-noticias").style.display = "none"
    document.getElementById("seccion-nosotros").style.display = "none"
    principal.style.background = "blueviolet"
    noticias.style.background = "transparent" 
    nosotros.style.background = "transparent"

})

noticias.addEventListener("click", ()=>{
    document.getElementById("seccion-noticias").style.display = "flex"
    document.getElementById("seccion-principal").style.display = "none"
    document.getElementById("seccion-nosotros").style.display = "none"
    noticias.style.background = "blueviolet"
    principal.style.background = "transparent" 
    nosotros.style.background = "transparent"
    
})

nosotros.addEventListener("click", ()=>{
    document.getElementById("seccion-nosotros").style.display = "flex"
    document.getElementById("seccion-principal").style.display = "none"
    document.getElementById("seccion-noticias").style.display = "none"
    nosotros.style.background = "blueviolet"
    noticias.style.background = "transparent" 
    principal.style.background = "transparent"
})