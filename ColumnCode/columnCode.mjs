import Formats from "../utils/formats.mjs";
import Matrix from "../utils/matrix.mjs";

class columnCode {
  constructor(text, columns, placeholder) {
    this.text = Formats.removeSpaces(text);
    this.columns = columns;
    this.placeholder = placeholder;
    this.rows = Math.ceil(this.text.length / this.columns);
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

    for (let i = 0; i < this.rows; i++) {
      matrix[i] = [];

      for (let j = 0; j < this.columns; j++) {
        matrix[i][j] = this.text[pos] || this.placeholder;
        pos++;
      }
    }

    return matrix;
  }

  #createDecryptionMatrix() {
    const matrix = [];
    let pos = 0;

    for (let i = 0; i < this.columns; i++) {
      matrix[i] = [];
      for (let j = 0; j < this.rows; j++) {
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

export default columnCode;
