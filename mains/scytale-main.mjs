import Escitala from "../Scytale/scytale.mjs";
import Formats from "../utils/formats.mjs";

// Message encryption

const encryptionMessage =
  "TALENTUM STARTUPS PROYECTO THOTH. CRIPTORED. PILDORA";
const encryptionRoll = 6;
const encryptionLength = 8;
const encryptionPlaceholder = "3";

const EncryptionEscitala = new Escitala(
  encryptionMessage,
  encryptionRoll,
  encryptionLength,
  encryptionPlaceholder
);

const encryptedMessage = EncryptionEscitala.encryption();
console.log(encryptedMessage);

// Cryptogram decryption

const decryptionMessage =
  "TSPTIP ATRHPI LAOOTL ERYTOD NTEHRO TUC.ER UPTCDA MSOR.3";
const decryptionRoll = 6;
const decryptionLength = 8;
const decryptionPlaceholder = "3";
const DecryptionEscitala = new Escitala(
  decryptionMessage,
  decryptionRoll,
  decryptionLength,
  decryptionPlaceholder
);

const decryptedMessage = DecryptionEscitala.decryption();

console.log(decryptedMessage);

// With spacings
console.log(``);
console.log(Formats.addSpaces(encryptedMessage, encryptionRoll));
console.log(Formats.addSpaces(decryptedMessage, decryptionLength));
