import Formats from "../formats.mjs";

class Escitala extends Formats {
  constructor(text, turns, longitude, placeholder) {
    super();
    this.text = Formats.removeSpaces(text);
    this.turns = turns;
    this.longitude = longitude;
    this.placeholder = placeholder;
  }

  encryption() {
    return this.#readMatrix(this.#createEncryptionMatrix());
  }

  decryption() {
    return this.#readMatrix(this.#createDecryptionMatrix());
  }

  #createEncryptionMatrix() {
    const matrix = [];
    let pos = 0;

    for (let i = 0; i < this.turns; i++) {
      matrix[i] = [];
      for (let j = 0; j < this.longitude; j++) {
        matrix[i][j] = this.text[pos] || this.placeholder;
        pos++;
      }
    }

    return matrix;
  }

  #createDecryptionMatrix() {
    const matrix = [];
    let pos = 0;

    for (let i = 0; i < this.longitude; i++) {
      matrix[i] = [];
      for (let j = 0; j < this.turns; j++) {
        if (this.text[pos] === this.placeholder) {
          matrix[i][j] = " ";
        } else {
          matrix[i][j] = this.text[pos];
        }
        pos++;
      }
    }

    return matrix;
  }

  #readMatrix(matrix) {
    let result = "";

    for (let j = 0; j < matrix[0].length; j++) {
      for (let i = 0; i < matrix.length; i++) {
        result += matrix[i][j];
      }
    }

    return result;
  }
}

export default Escitala;
