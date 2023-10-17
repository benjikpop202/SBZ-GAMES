let tarjetasVolteadas = 0
let tarjeta1 = null
let tarjeta2 = null
let primerResultado = null
let segundoResultado = null
let movimientos = 0
let aciertos = 0
let temporizador = false
let timer = 45
let timerInicial = 45
let tiempoRegresivoId = null

//sonidos
let winAudio = new Audio('./sonidos/win.wav')
let loseAudio = new Audio('./sonidos/lose.wav')
let clickAudio = new Audio('./sonidos/click.wav')
let rightAudio = new Audio('./sonidos/right.wav')
let wrongAudio = new Audio('./sonidos/wrong.wav')

let mostrarMovimientos = document.getElementById("movimientos")
let mostrarAciertos = document.getElementById("aciertos")
let mostarTiempo = document.getElementById("t-restante")
let restablecer = document.getElementById("restablecer")

let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=> {return Math.random() -0.5})

function contarTiempo(){
tiempoRegresivoId = setInterval(()=>{
    timer--
    mostarTiempo.innerHTML = `Tiempo: ${timer} segundos`
    if(timer == 0){
        clearInterval(tiempoRegresivoId)
        bloquearTarjetas()
        restablecer.style.visibility = "visible"
        loseAudio.play()
    }
},1000)

}

function bloquearTarjetas(){
    for(let i = 0; i<=15; i++ ){
        let tarjetaBloqueada = document.getElementById(i)
        tarjetaBloqueada.innerHTML = `<img src="./img/${numeros[i]}.png" >`;
        tarjetaBloqueada.disabled = true
    }
}

//funcyion principal

function voltear(id){
  if(temporizador == false){
    contarTiempo()
    temporizador = true
  }
  tarjetasVolteadas++
  if(tarjetasVolteadas == 1){
    tarjeta1 = document.getElementById(id)
    primerResultado = numeros[id]
    tarjeta1.innerHTML = `<img src="./img/${primerResultado}.png" >`
    clickAudio.play()
    tarjeta1.disabled = true
  }
  else if(tarjetasVolteadas == 2){
    tarjeta2 = document.getElementById(id)
    segundoResultado = numeros[id]
    tarjeta2.innerHTML = `<img src="./img/${segundoResultado}.png" >`
    tarjeta2.disabled = true
    movimientos++
    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`

    if(primerResultado == segundoResultado){
        tarjetasVolteadas = 0
        aciertos++
        mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`
        if(aciertos == 8){
            clearInterval(tiempoRegresivoId)
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`
            mostrarMovimientos.innerHTML =  `Movimientos: ${movimientos}`
            mostarTiempo.innerHTML =  `Felicidades!! ${timerInicial - timer} segundos `
            restablecer.style.visibility = "visible"
            winAudio.play()
        }
        
    }else{
        setTimeout(()=>{
          tarjeta1.innerHTML = ''
          tarjeta2.innerHTML = ''
          tarjeta1.disabled = false
          tarjeta2.disabled = false
          tarjetasVolteadas = 0
          wrongAudio.play()
        }, 700)
    }
  }
}
