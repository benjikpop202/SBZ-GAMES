const playBoard = document.querySelector(".play_board")
let puntaje = document.querySelector(".score")
let mayorPuntaje = document.querySelector(".high-score")
let foodx, foody
let snakeBody = []
let SnakeX = 15, SnakeY = 15
let velocityX = 0, velocityY = 0
let gameOver = false
let score = 0
let highScore = localStorage.getItem("high-score") || 0;
mayorPuntaje.innerHTML = `High score: ${highScore}`

//sonidos
let eatApple = new Audio('./sonidos/click.wav')
let loseGame = new Audio('./sonidos/lose.wav')

const changePosition = () => {
 foodx = Math.floor(Math.random() * 30) +1
 foody = Math.floor(Math.random() * 30) +1
 
 }

const GameOver = () => {
  clearInterval(Temporizador)
  alert("GAME OVER")
  location.reload()
  
}

 const changeDirection = (e) => {
    console.log(e)
  if(e.key === "ArrowUp" && velocityY != 1){
    velocityX = 0
    velocityY = -1
  }else if(e.key === "ArrowDown" && velocityY != -1){
    velocityX = 0
    velocityY = 1
  }else if(e.key === "ArrowLeft" && velocityX != 1 ){
    velocityX = -1
    velocityY = 0
 }else if(e.key === "ArrowRight" && velocityX != -1){
    velocityX = 1
    velocityY = 0
 }
 initGame()
}


const initGame = () =>{
  if(gameOver){
    return GameOver()
  }
 let addElements = `<div class="food" style="grid-row-start: ${foodx}; grid-row-end: ${foodx + 1}; grid-column-start: ${foody}; grid-column-end: ${foody + 1};"></div>`
 //mover serpiente
 SnakeX += velocityX
 SnakeY += velocityY

 if(SnakeX <= 0 || SnakeX > 30 || SnakeY <= 0 || SnakeY > 30){
  gameOver = true
  loseGame.play()
 }
 //condicion para cambiar manzana
 if(SnakeY === foodx && SnakeX === foody){
  changePosition()
  snakeBody.push([foodx, foody])
  score++
  highScore = score >= highScore ? score : highScore;
  localStorage.setItem("high-score", highScore);
  eatApple.play()
  puntaje.innerHTML = `Score: ${score}`
  mayorPuntaje.innerHTML = `High score: ${highScore}`

 }

 for(let i = snakeBody.length -1; i > 0; i--){
  snakeBody[i] = snakeBody[i - 1]
 }

 snakeBody[0] = [SnakeY, SnakeX]
 for(i = 0; i < snakeBody.length; i++){
  addElements += `<div class="head" style="grid-row-start: ${snakeBody[i][0]}; grid-row-end: ${snakeBody[i][0] + 1}; grid-column-start: ${snakeBody[i][1]}; grid-column-end: ${snakeBody[i][1] + 1};"></div>`
  if(i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]){
    gameOver = true
    loseGame.play()
  }
 }
 
 playBoard.innerHTML = addElements

}
changePosition()
let Temporizador = setInterval(initGame,200)
document.addEventListener("keydown", changeDirection)
