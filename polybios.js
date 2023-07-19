const mapping = {
  a: "AA",
  b: "AB",
  c: "AC",
  d: "AD",
  e: "AE",
  f: "BA",
  g: "BB",
  h: "BC",
  i: "BD",
  j: "BD",
  k: "BE",
  l: "CA",
  m: "CB",
  n: "CC",
  o: "CD",
  p: "CE",
  q: "DA",
  r: "DB",
  s: "DC",
  t: "DD",
  u: "DE",
  v: "EA",
  w: "EB",
  x: "EC",
  y: "ED",
  z: "EE",
};

function polybios(text) {
  text = text.toLowerCase();
  let res = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== " ") {
      const char = text[i];
      if (char in mapping) {
        res += mapping[char] + " ";
      } else {
        // Caracteres no mapeados se mantienen sin cambios
        res += char + " ";
      }
    }
  }
  return res.trim();
}

const rta = polybios(
  "Hay basicamente tres formas de romper la seguridad de un sistema criptografico"
);
console.log(rta);
