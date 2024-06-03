import analyzer from "./analyzer.js";

const textarea = document.querySelector("[name=user-input]");

const button = document.getElementById("reset-button");

textarea.addEventListener("input", function (event) {
  const wordCount = analyzer.getWordCount(event.target.value);
  document.querySelectorAll(
    ".item"
  )[0].textContent = `Recuento de palabras: ${wordCount}`;

  const charCount = analyzer.getCharacterCount(event.target.value);
  document.querySelectorAll(
    ".item"
  )[1].textContent = `Recuento de caracteres: ${charCount}`;

  const charCountNoSpaces = analyzer.getCharacterCountExcludingSpaces(
    event.target.value
  );
  document.querySelectorAll(
    ".item"
  )[2].textContent = `Recuento de caracteres excluyendo espacios y signos de puntuacion: ${charCountNoSpaces}`;

  const numberCount = analyzer.getNumberCount(event.target.value);
  document.querySelectorAll(
    ".item"
  )[3].textContent = `Recuento de numeros: ${numberCount}`;

  const numberSum = analyzer.getNumberSum(event.target.value);
  document.querySelectorAll(
    ".item"
  )[4].textContent = `Suma total de numeros: ${numberSum}`;

  const averageWordLength = analyzer.getAverageWordLength(event.target.value);
  document.querySelectorAll(
    ".item"
  )[5].textContent = `Longitud media de las palabras: ${averageWordLength.toFixed(
    2
  )}`;
});

button.addEventListener("click", function () {
  textarea.value = "";


  document.querySelectorAll(
    ".item"
  )[0].textContent = `Recuento de palabras: ${0}`;

  document.querySelectorAll(
    ".item"
  )[1].textContent = `Recuento de caracteres: ${0}`;

  document.querySelectorAll(
    ".item"
  )[2].textContent = `Recuento de caracteres excluyendo espacios y signos de puntuacion: ${0}`;

  document.querySelectorAll(
    ".item"
  )[3].textContent = `Recuento de numeros: ${0}`;

  document.querySelectorAll(
    ".item"
  )[4].textContent = `Suma total de numeros: ${0}`;

  document.querySelectorAll(
    ".item"
  )[5].textContent = `Longitud media de las palabras: ${0}`;
});
