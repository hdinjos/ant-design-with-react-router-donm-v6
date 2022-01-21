import SecureLS from "secure-ls";
import { secretKey } from "./constant";

const sStorage = new SecureLS({ encodingType: "aes", encryptionSecret: secretKey });

export default sStorage;