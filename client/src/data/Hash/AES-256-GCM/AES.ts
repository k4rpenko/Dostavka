async function decryptAES(encryptedBase64, keyBase64, ivBase64, tagBase64) {
    // Декодуємо дані з Base64
    const encryptedData = Uint8Array.from(atob(encryptedBase64), c => c.charCodeAt(0));
    const keyBuffer = Uint8Array.from(atob(keyBase64), c => c.charCodeAt(0));
    const ivBuffer = Uint8Array.from(atob(ivBase64), c => c.charCodeAt(0));
    const tagBuffer = Uint8Array.from(atob(tagBase64), c => c.charCodeAt(0));

    // AES-GCM вимагає, щоб тег був в кінці зашифрованого повідомлення
    const encryptedBuffer = new Uint8Array(encryptedData.length + tagBuffer.length);
    encryptedBuffer.set(encryptedData);
    encryptedBuffer.set(tagBuffer, encryptedData.length);

    // Імпортуємо AES-ключ
    const cryptoKey = await window.crypto.subtle.importKey(
        "raw",
        keyBuffer,
        { name: "AES-GCM" },
        false,
        ["decrypt"]
    );

    try {
        // Декодуємо повідомлення
        const decryptedBuffer = await window.crypto.subtle.decrypt(
            { name: "AES-GCM", iv: ivBuffer },
            cryptoKey,
            encryptedBuffer
        );

        return new TextDecoder().decode(decryptedBuffer); // Розшифрований текст
    } catch (error) {
        console.error("❌ Помилка розшифрування:", error);
        return null;
    }
}