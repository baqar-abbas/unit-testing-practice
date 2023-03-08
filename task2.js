// checking reverse string

const revString = (str) => {
    if (str.length > 0 && str.length <= 10) {
      return str.split("").reverse().join("");
    } else {
      throw new Error("string length out of bounds");
    }
  };
  
  module.exports = revString;