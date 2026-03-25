let input = document.getElementById("guessInput")
const button = document.getElementById("guessBtn")
let message = document.getElementById("message")
let attemptsText = document.getElementById("attempts")
const reset = document.getElementById("resetBtn")
const winGif = document.getElementById("winGif");
let Numeros = document.getElementById("Numeros");

  let NumerosIntentados = [];
  let secretNumber = Math.floor(Math.random()*100)
  let attempts = 0

button.addEventListener("click", checkGuess)

function checkGuess(){
while(attempts< 10){
  const guess = input.value
if(guess < 1 || guess > 100 || guess == null){
  message.innerText = "no se permiten numero fuera de campo"
}
else{
  attempts = attempts + 1

  attemptsText.innerText = attempts

NumerosIntentados.push(guess);
Numeros.innerText = NumerosIntentados
  if(guess == secretNumber){
 message.innerText = "¡Ganaste!"
  winGif.style.display = "block"; 
reset.addEventListener('click', () => {
  input.value = ''; 
  message.innerText = '';
  secretNumber = Math.floor(Math.random()*100);
  winGif.style.display = "none"; 
});
  }

  else if(guess < secretNumber){
   message.innerText = "El número es mayor"
  }

  else if(guess > secretNumber){
  message.innerText = "El número es menor"
  }
}
  input.value = ''; 
}
message.innerText = (`Perdiste, te pasaste de intentos ${secretNumber} `)
}

reset.addEventListener('click', () => {
  input.value = ''; 
  message.innerText = '';
  secretNumber = Math.floor(Math.random()*100)
})
;