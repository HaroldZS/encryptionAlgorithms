const alfabeto = "descoifartuvwxyzbghjklmnñpq";
// const alfabeto = "jorgeluisbcdfhkmnñpqtvwxyza";

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

// const mensaje =
//   "El universo es comparable a esas criptografias en las que no valen todos los simbolos";

const mensaje =
  "Cifrados codigos y claves son parte integral de nuestras vidas";

const b = 3;
console.log(cesarEncryption(mensaje, b));
