import ColumnCode from "../ColumnCode/columnCode.mjs";
import Formats from "../utils/formats.mjs";

// Message encryption

const encryptionMessage = "QUE LA FUERZA TE ACOMPAÑE";
const encryptionColumns = 6;
const encryptionPlaceholder = "X";

const EncryptionColumnCode = new ColumnCode(
  encryptionMessage,
  encryptionColumns,
  encryptionPlaceholder
);

const encryptedMessage = EncryptionColumnCode.encryption();
console.log(encryptedMessage);

// Message decryption

const decryptionMessage = "EIETN OOOON MSCEU XASEX SVRX";
const decryptionColumns = 6;
const decryptionPlaceholder = "X";

const DecryptionColumnCode = new ColumnCode(
  decryptionMessage,
  decryptionColumns,
  decryptionPlaceholder
);

const decryptedMessage = DecryptionColumnCode.decryption();
console.log(decryptedMessage);

// // With spacings
console.log(``);
console.log(Formats.addSpaces(encryptedMessage, 5));
