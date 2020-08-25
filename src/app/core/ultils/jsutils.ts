import forge from "node-forge";




export class JSUtils {

  // RSA/ECB/OAEPWithMD5AndMGF1Padding
  public static rsaEncryptPublicKeyWithMD5AndMGF1Padding(publicKey, password) {
    let kpubKey = forge.pki.publicKeyFromPem(publicKey);

    let encrypted = kpubKey.encrypt(password, "RSA-OAEP", {
      md: forge.md.md5.create(),
      mgf1: {
        md: forge.md.sha1.create(),
      },
    });

    return forge.util.encode64(encrypted);
  }

  public static encryptStorage(keyphrases, plaintext) {
    let salt = "(N9u0!)[Y3u]{29}{Co}[Ng210i](43u)(111o!)"; //Đừng hỏi tại sao, vì dev buồn thôi :((
    let key = forge.pkcs5.pbkdf2(keyphrases, salt, 1000, 16);
    let iv = "0000000000003107"; //Buồn thì nghe bai 3107 nhé :))

    let cipher = forge.cipher.createCipher("AES-CBC", key);
    cipher.start({ iv: iv });
    cipher.update(forge.util.createBuffer(plaintext));
    cipher.finish();
    let encrypted = cipher.output;
    return forge.util.encode64(encrypted.data);
  }

  public static decryptStorage(keyphrases, encrypted) {
    let salt = "(N9u0!)[Y3u]{29}{Co}[Ng210i](43u)(111o!)"; //Đừng hỏi tại sao, vì dev buồn thôi :((
    let key = forge.pkcs5.pbkdf2(keyphrases, salt, 1000, 16);
    let iv = "0000000000003107"; //Buồn thì nghe bai 3107 nhé :))

    let decodedB64 = forge.util.decode64(encrypted);
    let input = forge.util.createBuffer(decodedB64);

    var decipher = forge.cipher.createDecipher("AES-CBC", key);
    decipher.start({ iv: iv });
    decipher.update(input);
    decipher.finish();
    return decipher.output.data;
  }
};
