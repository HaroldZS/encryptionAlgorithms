const alfabeto = "abcdefghijklmnñopqrstuvwxyz";

function cesarDecription(criptograma, b) {
  const criptoArray = criptograma.toLowerCase().split("");

  const messageArray = criptoArray.map((item) => {
    if (item === " ") {
      return item;
    }

    const index = alfabeto.indexOf(item);
    const newIndex = (index - b + alfabeto.length) % alfabeto.length;
    return alfabeto[newIndex];
  });

  return messageArray.join("");
}

const c = "RYIWXVEW TSPMXMGEW VIPEXMZEW E PE PMFIVXEH HI IBTVIWMSR";
const b = 4;
console.log(cesarDecription(c, b));
