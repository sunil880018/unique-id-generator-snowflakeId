import bcrypt from "bcrypt";

const generateHashPassword = () => {
  const saltRounds = 10;
  const myPlaintextPassword = "SuryaTheSoldier";

  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(myPlaintextPassword, salt);
  console.log(salt, hash);
  return hash;
};

export { generateHashPassword };

// Bcrypt is a password hashing function that uses the Blowfish symmetric-key block cipher algorithm to hash passwords. The Blowfish algorithm is a fast, secure, and widely used encryption algorithm that is well-suited for use in password hashing functions.

// Bcrypt uses a number of techniques to make it more secure and resistant to attacks, such as:

// A salt: Bcrypt generates a unique salt for each password, which is added to the password before it is hashed. This makes it more difficult for attackers to use precomputed hash tables or other techniques to crack the password, as the salt makes each password hash unique.

// A work factor: Bcrypt allows the user to specify a "work factor", which determines how long the hashing process takes. This makes it more difficult for attackers to use brute-force techniques to crack the password, as they have to try more possible passwords in order to find the correct one.

// Key stretching: Bcrypt uses a technique called "key stretching" to slow down the hashing process and make it more resistant to attacks. Key stretching involves repeatedly hashing the password and adding the output to the input, which makes the hashing process much slower and more resource-intensive.

// Overall, Bcrypt is a secure and widely-used password hashing function that is designed to protect against attacks and make it difficult for attackers to crack passwords.