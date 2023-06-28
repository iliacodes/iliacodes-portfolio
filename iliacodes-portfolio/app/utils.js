const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function generateRandomString(length) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += letters[Math.floor(Math.random() * letters.length)];
  }
  return result;
};