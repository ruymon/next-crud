export const firebaseIdGenerator = (length= 19) => {
  const availableChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let firebaseId = "";

  for (let i = 0; i < length; i++) {
    firebaseId += availableChars.charAt(Math.floor(Math.random() * availableChars.length));
  }

  return firebaseId;
};