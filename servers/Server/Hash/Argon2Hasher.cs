using System.Security.Cryptography;
using System.Text;
﻿using Hash.Interface;
using Konscious.Security.Cryptography;
using System;
using System.Security.Cryptography;
using System.Text;

namespace Hash
{
    public class Argon2Hasher : IArgon2Hasher
    {
        public string Encrypt(string password, string Key)
        {
            byte[] passwordBytes = Encoding.UTF8.GetBytes(password);
            byte[] salt = Encoding.UTF8.GetBytes(Key);

            using (var argon2 = new Argon2i(passwordBytes))
            {
                argon2.Salt = salt;
                argon2.DegreeOfParallelism = 8;
                argon2.MemorySize = 65536;
                argon2.Iterations = 4;

                byte[] hash = argon2.GetBytes(32);
                return Convert.ToBase64String(hash);
            }
        }

        public string GenerateKey()
        {
            byte[] salt = new byte[16];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(salt);
            }
            return salt.ToString();
        }
    }
}