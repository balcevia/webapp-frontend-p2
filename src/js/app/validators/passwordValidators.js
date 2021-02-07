export const validatePassword = (password) => {
    const entropyThreshold = 65;
  
    const poolOfUniqueCharacters = conditions.map(f => f(password)).reduce((a, b) => a + b, 0);
    const entropy = calculateEntropy(poolOfUniqueCharacters, password.length);
  
    if(entropy < entropyThreshold) {
      return "Password is weak";
    }
  };
  
  const calculateEntropy = (poolOfUniqueCharacters, length) => Math.log2(Math.pow(poolOfUniqueCharacters, length));
  
  const conditions = [
    str => /[a-z]/.test(str) ? 26 : 0,
    str => /[A-Z]/.test(str) ? 26 : 0,
    str => /[0-9]/.test(str) ? 10 : 0,
    str => /^[^a-zA-Z0-9]+$/.test(str) ? 0 : 9
  ];
  
  export const validatePasswordEquality = (val, {password}) => {
    if(val !== password) {
      return "Passwords should be equal"
    }
  };