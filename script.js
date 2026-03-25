let input = document.getElementById("guessInput")
const button = document.getElementById("guessBtn")
let message = document.getElementById("message")
let attemptsText = document.getElementById("attempts")
const reset = document.getElementById("resetBtn")
const main = document.querySelector("main");
let Numeros = document.getElementById("Numeros");

let NumerosIntentados = [];
let secretNumber = Math.floor(Math.random() * 100)
let attempts = 0

button.addEventListener("click", checkGuess)

function checkGuess() {
  if(attempts < 10){
    const guess = input.value
    if (guess < 1 || guess > 100 || guess == null) {
      message.innerText = "no se permiten numero fuera de campo"
    }
    else {
      attempts = attempts + 1

      attemptsText.innerText = attempts

      NumerosIntentados.push(guess);
      Numeros.innerText = NumerosIntentados
      if (guess == secretNumber) {
        message.innerText = "¡Ganaste!"
       
  main.classList.add("win");
        reset.addEventListener('click', () => {
          input.value = '';
          message.innerText = '';
          secretNumber = Math.floor(Math.random() * 100);
            NumerosIntentados = [];
           attempts = 0;
           Numeros.innerText = '';
           attemptsText.innerText = '';
         main.classList.remove("win"); 
        });
      }

      else if (guess < secretNumber) {
        message.innerText = "El número es mayor"
      }

      else if (guess > secretNumber) {
        message.innerText = "El número es menor"
      }
    }
    input.value = '';
  }
   else{
  message.innerText = (`Perdiste, te pasaste de intentos ${secretNumber} `)
   main.classList.add("lose");
   reset.addEventListener('click', () => {
          input.value = '';
          message.innerText = '';
          secretNumber = Math.floor(Math.random() * 100);
            NumerosIntentados = [];
           attempts = 0;
           Numeros.innerText = '';
           attemptsText.innerText = '';
         main.classList.remove("lose"); 
        });
  }

  }
 
reset.addEventListener('click', () => {
  input.value = '';
  message.innerText = '';
  NumerosIntentados = [];
  attempts = 0;
  Numeros.innerText = '';
  attemptsText.innerText = '';
  secretNumber = Math.floor(Math.random() * 100)
})
  ;