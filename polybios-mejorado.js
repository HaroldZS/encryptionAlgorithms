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
  const normalizedText = text.toLowerCase();
  let res = "";
  for (let i = 0; i < normalizedText.length; i++) {
    const char = normalizedText[i];
    if (char !== " ") {
      res += mapping[char] || char;
      res += " ";
    }
  }
  return res.trim();
}

const rta = polybios(
  "Hay basicamente tres formas de romper la seguridad de un sistema criptografico"
);
console.log(rta);
