using Hash.Interface;
using System;
using System.Security.Cryptography;
using System.Text;

namespace Hash
{
    public class RSAHash : IRSAHash
    {
        private RSA _rsa;

        public RSAHash()
        {
            _rsa = RSA.Create();
        }

        public string GeneratePublicKeys()
        {
            var publicKey = Convert.ToBase64String(_rsa.ExportSubjectPublicKeyInfo());
            return (publicKey);
        }
        
        public string GeneratePrivateKeys()
        {
            var privateKey = Convert.ToBase64String(_rsa.ExportPkcs8PrivateKey());
            return ( privateKey);
        }

        public byte[] Encrypt(string data, string publicKey)
        {
            _rsa.ImportSubjectPublicKeyInfo(Convert.FromBase64String(publicKey), out _);
            return _rsa.Encrypt(Encoding.UTF8.GetBytes(data), RSAEncryptionPadding.OaepSHA256);
        }


        public string Decrypt(byte[] data, string privateKey)
        {
            _rsa.ImportPkcs8PrivateKey(Convert.FromBase64String(privateKey), out _);
            var decryptedData = _rsa.Decrypt(data, RSAEncryptionPadding.OaepSHA256);
            return Encoding.UTF8.GetString(decryptedData);
        }
    }
}
