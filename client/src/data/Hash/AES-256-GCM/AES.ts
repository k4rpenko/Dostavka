import * as crypto from 'crypto';

export class DecryptAES {
    private keyBuffer: Buffer;
    private ivBuffer: Buffer;
    private ALGORITHM = 'aes-256-gcm';

    constructor(keyBase64: string, ivBase64: string) {
        this.keyBuffer = Buffer.from(keyBase64, 'base64');
        this.ivBuffer = Buffer.from(ivBase64, 'base64');
    }

    public decrypt(data: string, tagBase64: string): string {
        try {
            const encryptedBuffer = Buffer.from(data, 'base64');
            const tagBuffer = Buffer.from(tagBase64, 'base64');

            const decipher = crypto.createDecipheriv(this.ALGORITHM, this.keyBuffer, this.ivBuffer) as crypto.DecipherGCM;
    
            decipher.setAuthTag(tagBuffer);
    
            const decrypted = Buffer.concat([
                decipher.update(encryptedBuffer),
                decipher.final(),
            ]);
    
            return decrypted.toString('utf8');
        } catch (error) {
            console.error("❌ Помилка розшифрування:", error);
            return `❌ Помилка розшифрування: ${error}`;
        }
    }
}