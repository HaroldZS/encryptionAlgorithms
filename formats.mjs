class Formats {
  static removeSpaces(text) {
    return text.replace(/\s/g, "");
  }

  static addSpaces(text, interval) {
    const regex = new RegExp(`.{1,${interval}}`, "g");
    return text.match(regex).join(" ");
  }
}

export default Formats;
