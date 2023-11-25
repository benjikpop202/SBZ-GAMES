let principal = document.getElementById("principal")
let noticias = document.getElementById("noticias")
let nosotros = document.getElementById("nosotros")

principal.addEventListener("click", ()=>{
    document.getElementById("seccion-principal").style.display = "flex"
    document.getElementById("seccion-noticias").style.display = "none"
    document.getElementById("seccion-nosotros").style.display = "none"
})

noticias.addEventListener("click", ()=>{
    document.getElementById("seccion-noticias").style.display = "flex"
    document.getElementById("seccion-principal").style.display = "none"
    document.getElementById("seccion-nosotros").style.display = "none"
})

nosotros.addEventListener("click", ()=>{
    document.getElementById("seccion-nosotros").style.display = "flex"
    document.getElementById("seccion-principal").style.display = "none"
    document.getElementById("seccion-noticias").style.display = "none"
})