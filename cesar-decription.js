const alfabeto = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function cesarDecription(criptograma, b) {
  criptograma = criptograma.toLowerCase();
  let criptoArray = [...criptograma];

  let messageArray = criptoArray.map((item) => {
    if (item === " ") {
      return item;
    }

    let index = alfabeto.findIndex((letter) => letter === item);
    let newIndex = index - b >= 0 ? (index - b) % 27 : 27 - Math.abs(index - b);
    return [alfabeto[newIndex]];
  });

  return messageArray.join("");
}

let c = "RYIWXVEW TSPMXMGEW VIPEXMZEW E PE PMFIVXEH HI IBTVIWMSR";
let b = 4;
console.log(cesarDecription(c, b));
