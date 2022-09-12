/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
        const strArr = str.split('');
        let counter = 0;
        for (let i = 0, len = strArr.length; i < len; i++) {
          if (strArr[i] === "(" || strArr[i] === "[" || strArr[i] === "{") {
             counter++;
          }else if (strArr[i] === ")" || strArr[i] === "]" || strArr[i] === "}") {
             counter--;
          };
          if (counter < 0) {
             return "invalid";
          };
        };
        if (counter === 0) {
          return "valid";
        };
        return "invalid" 
}



module.exports = isValid;
