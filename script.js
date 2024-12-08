// hangman.js
const words = ["javascript", "ahorcado", "programar", "frontend"];
let word = words[Math.floor(Math.random() * words.length)];
let attempts = 6;
let guessedWord = Array(word.length).fill('_');
let usedLetters = new Set();

const wordElement = document.getElementById("currentWord");
const attemptsElement = document.getElementById("attempts");
const usedLettersElement = document.getElementById("usedLetters");
const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modalMessage");
const restartButton = document.getElementById("restartButton");

// Mostrar la palabra inicial
wordElement.textContent = guessedWord.join(" ");

document.addEventListener("keydown", (event) => {
  const letter = event.key.toLowerCase();

  // Validar entrada válida (sólo letras no repetidas)
  if (!/^[a-zñ]$/.test(letter) || usedLetters.has(letter)) return;

  // Agregar letra a las usadas
  usedLetters.add(letter);
  usedLettersElement.textContent = Array.from(usedLetters).join(", ");

  // Verificar si la letra está en la palabra
  if (word.includes(letter)) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        guessedWord[i] = let

