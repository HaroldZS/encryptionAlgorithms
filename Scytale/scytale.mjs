import Formats from "../utils/formats.mjs";
import Matrix from "../utils/matrix.mjs";

class Escitala {
  constructor(text, turns, longitude, placeholder) {
    this.text = Formats.removeSpaces(text);
    this.turns = turns;
    this.longitude = longitude;
    this.placeholder = placeholder;
  }

  encryption() {
    return Matrix.readMatrix(this.#createEncryptionMatrix());
  }

  decryption() {
    return Matrix.readMatrix(this.#createDecryptionMatrix());
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
}

export default Escitala;
