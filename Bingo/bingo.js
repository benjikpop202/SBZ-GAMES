const jugador1 = [{"valor": null, "check":false}, {"valor": null, "check": false}, {"valor": null, "check": false}, {"valor": null, "check": false}, {"valor": null, "check": false},
{"valor": null, "check": false}, {"valor": null, "check": false}, {"valor": null, "check": false}, {"valor": null, "check": false},{"valor": null, "check": false},
{"valor": null, "check": false}, {"valor": null, "check": false}, {"valor": null, "check": false}, {"valor": null, "check": false},  {"valor": null, "check": false},
{"valor": null, "check": false},{"valor": null, "check": false}, {"valor": null, "check": false}, {"valor": null, "check": false}, {"valor": null, "check": false},
{"valor": null, "check": false}, {"valor": null, "check": false},{"valor": null, "check": false}, {"valor": null, "check": false},{"valor": null, "check": false}
]
//agregar valores aleatorios al tablero1
function getRandomUniqueNumber1(min, max, usedNumbers) {
   let num;
   do {
       num = Math.floor(Math.random() * (max - min + 1)) + min;
   } while (usedNumbers.has(num)); // Verificar si el número ya ha sido usado
   usedNumbers.add(num); // Agregar el número al conjunto de números usados
   return num;
}

// Conjunto para mantener un registro de los números ya usados
let usedNumbers1 = new Set();

// Asignar números aleatorios a la propiedad "valor" de cada objeto en el arreglo
jugador1.forEach(objeto => {
   objeto.valor = getRandomUniqueNumber1(1, 75, usedNumbers1);
});

const jugador2 = [{"valor": null, "check":false}, {"valor": null, "check": false}, {"valor": null, "check": false}, {"valor": null, "check": false}, {"valor": null, "check": false},
{"valor": null, "check": false}, {"valor": null, "check": false}, {"valor": null, "check": false}, {"valor": null, "check": false},{"valor": null, "check": false},
{"valor": null, "check": false}, {"valor": null, "check": false}, {"valor": null, "check": false}, {"valor": null, "check": false},  {"valor": null, "check": false},
{"valor": null, "check": false},{"valor": null, "check": false}, {"valor": null, "check": false}, {"valor": null, "check": false}, {"valor": null, "check": false},
{"valor": null, "check": false}, {"valor": null, "check": false},{"valor": null, "check": false}, {"valor": null, "check": false},{"valor": null, "check": false}
]


function getRandomUniqueNumber2(min, max, usedNumbers) {
   let num;
   do {
       num = Math.floor(Math.random() * (max - min + 1)) + min;
   } while (usedNumbers.has(num)); 
   usedNumbers.add(num); 
   return num;
}

let usedNumbers2 = new Set();

jugador2.forEach(objeto => {
   objeto.valor = getRandomUniqueNumber2(1, 75, usedNumbers2);
});


let celdas = document.querySelectorAll('.celdas')
let celda2 = document.querySelectorAll('.celda2')

for (let i = 0; i < celdas.length; i++) {
    celdas[i].innerHTML = jugador1[i].valor
    
}

for(let j = 0; j < celda2.length; j++){
    celda2[j].innerHTML = jugador2[j].valor
}

//llamar mas variables
let contador = document.getElementById("contador")
let mensaje = document.getElementById("mensaje")
let boton_random = document.getElementById("btn")
let evaluador = document.getElementById("evaluador")


const valores = []
for(let i = 1; i < 75; i++){
    valores.push(i)
}

function obtenerNumeroAleatorio() {
    let indiceAleatorio = Math.floor(Math.random() * valores.length);
    let numeroAleatorio = valores.splice(indiceAleatorio, 1)[0];
    return numeroAleatorio;
 }
 

boton_random.addEventListener("click", () => {
    let random = obtenerNumeroAleatorio()
    contador.innerHTML = random
    //verificar jugador 1
    for(let i = 0; i < jugador1.length; i++){
        if(random === jugador1[i].valor && jugador1[i].check === false){
           jugador1[i].check = true;
           break;
        }
     }

      celdas.forEach((celda)=>{
      if(parseInt(celda.textContent) === random){
         celda.style.background = 'red';
      }
     })
    
     let player1Win = jugador1.every(function(jugador1){
        return jugador1.check === true;
     })
    
     if(player1Win){
      mensaje.style.visibility = "visible"
        evaluador.innerHTML = "ganaste!!"
        document.getElementById("btn").disabled = true
     }
     //verificar jugador 2
     for(let j = 0; j < jugador2.length; j++){
        if(random === jugador2[j].valor){
           jugador2[j].check = true;
           break;
        }
     }

     celda2.forEach((celda)=>{
      if(parseInt(celda.textContent) === random){
         celda.style.backgroundColor = 'red'
         celda.style.boxshadow = '0px 0px 4px red';
      }
     })
    
     let player2Win = jugador2.every(function(jugador2){
        return jugador2.check === true
     })
    
     if(player2Win){
        mensaje.style.visibility = "visible"
        evaluador.innerHTML = "gano oponente"
        document.getElementById("btn").disabled = true
     }
})
