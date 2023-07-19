const alfabeto = "abcdefghijklmnñopqrstuvwxyz";

function cesarEncryption(mensaje, b) {
  const mensajeArray = mensaje.toLowerCase().split("");

  const criptogramaArray = mensajeArray.map((item) => {
    if (item === " ") {
      return item;
    }

    const index = alfabeto.indexOf(item);
    const newIndex = (index + b) % alfabeto.length;
    return alfabeto[newIndex];
  });

  return criptogramaArray.join("").toUpperCase();
}

const mensaje1 =
  "El universo es comparable a esas criptografias en las que no valen todos los simbolos";
const mensaje2 =
  "Cifrados codigos y claves son parte integral de nuestras vidas";
const b = 3;
console.log(cesarEncryption(mensaje1, b));
console.log(cesarEncryption(mensaje2, b));
