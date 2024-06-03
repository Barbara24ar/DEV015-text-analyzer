const analyzer = {
  getWordCount: (text) => {
    text = text.trim();
    if (text === '') {
      return 0;
    }

    // Dividimos la cadena en palabras usando espacios como delimitadores
    const words = text.split(/\s+/);

    // Filtramos las palabras para eliminar las que contienen solo números words.filter(...)
    // crea un nuevo array que contiene solo los elementos del array words que pasan una condición especificada en una función.
    const filteredWords = words.filter(word => !/^\d+$/.test(word));

    return filteredWords.length;
  },

  getCharacterCount: (text) => {
    const numero_de_caracteres = text.length;
    return numero_de_caracteres;
  },
  getCharacterCountExcludingSpaces: (text) => {
    if (typeof text !== "string") {
      return 0;
    }
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char.match(/[\w]/)) {
        count++;
      }
    }
    return count;
  },
  getAverageWordLength: (text) => {
    if (typeof text !== "string") {
      return 0;
    }
    text = text.trim();
    if (text === "") {
      return 0;
    }
    const words = text.split(/\s+/);
    if (words.length === 0) {
      return 0;
    }
    let totalCharacters = 0;
    for (const word of words) {
      totalCharacters += word.length;
    }
    return parseFloat((totalCharacters / words.length).toFixed(2));
  },
  getNumberCount: (text) => {
    const numbers = text.match(/\b-?\d+(\.\d+)?\b/g);
    if (numbers === null) {
      return 0;
    }
    return numbers.length;
  },
  getNumberSum: (text) => {
    const numbers = text.match(/\b-?\d+(\.\d+)?\b/g);
    if (numbers === null) {
      return 0;
    }
    const sum = numbers.reduce((acc, num) => acc + parseFloat(num), 0);
    return sum;
  },
};

export default analyzer;
