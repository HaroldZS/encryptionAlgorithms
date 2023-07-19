function escitalaEncription(text, rows, columns, placeholder, spacing) {
  const formattedText = removeSpaces(text);
  const matrix = createMatrix(formattedText, rows, columns, placeholder);
  let result = readMatrix(matrix);

  if (spacing) {
    result = addBlockSpacing(result, rows);
  }

  return result;
}

function escitalaDecription(text, rows, columns, placeholder, spacing) {
  const formattedText = removeSpaces(text);
  const matrix = decriptionMatrix(formattedText, rows, columns, placeholder);
  let result = readMatrix(matrix);

  if (spacing) {
    result = addBlockSpacing(result, columns);
  }

  return result;
}

function createMatrix(text, rows, columns, placeholder) {
  const matrix = [];
  let pos = 0;

  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = text[pos] || placeholder;
      pos++;
    }
  }

  return matrix;
}

function decriptionMatrix(text, rows, columns, placeholder) {
  const matrix = [];
  let pos = 0;

  for (let i = 0; i < columns; i++) {
    matrix[i] = [];
    for (let j = 0; j < rows; j++) {
      if (text[pos] === placeholder) {
        matrix[i][j] = " ";
      } else {
        matrix[i][j] = text[pos];
      }
      pos++;
    }
  }

  return matrix;
}

function removeSpaces(text) {
  return text.replace(/\s/g, "");
}

function readMatrix(matrix) {
  let result = "";

  for (let j = 0; j < matrix[0].length; j++) {
    for (let i = 0; i < matrix.length; i++) {
      result += matrix[i][j];
    }
  }

  return result;
}

function addBlockSpacing(text, blockSize) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    result += text[i];
    if ((i + 1) % blockSize === 0 && i !== text.length - 1) {
      result += " ";
    }
  }

  return result;
}

// Ejemplo de uso - Encription
const message = "TALENTUM STARTUPS PROYECTO THOTH. CRIPTORED. PILDORA";
const roll = 6;
const length = 8;

console.log(escitalaEncription(message, roll, length, "3", true));

// Ejemplo de uso - Decription

const decriptionMessage =
  "TSPTIP ATRHPI LAOOTL ERYTOD NTEHRO TUC.ER UPTCDA MSOR.3";

console.log(escitalaDecription(decriptionMessage, roll, length, "3", true));
