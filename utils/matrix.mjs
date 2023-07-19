class Matrix {
  static readMatrix(matrix) {
    let result = "";

    for (let j = 0; j < matrix[0].length; j++) {
      for (let i = 0; i < matrix.length; i++) {
        result += matrix[i][j];
      }
    }

    return result;
  }
}

export default Matrix;
