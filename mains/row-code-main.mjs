import RowCode from "../RowCode/rowCode.mjs";
import Formats from "../utils/formats.mjs";

// Message encryption

const encryptionMessage = "QUE LA FUERZA TE ACOMPAÑE";
const encryptionRows = 4;
const encryptionPlaceholder = "X";

const EncryptionRowCode = new RowCode(
  encryptionMessage,
  encryptionRows,
  encryptionPlaceholder
);

const encryptedMessage = EncryptionRowCode.encryption();
console.log(encryptedMessage);

// Cryptogram decryption

const decryptionMessage =
  "QAREM EUFZA PXEUA CAXLE TOÑX";
const decryptionRows = 6;
const decryptionPlaceholder = "X";
const DecryptionRowCode = new RowCode(
  decryptionMessage,
  decryptionRows,
  decryptionPlaceholder
);

const decryptedMessage = DecryptionRowCode.decryption();

console.log(decryptedMessage);

// // With spacings
console.log(``);
console.log(Formats.addSpaces(encryptedMessage, 5));
