/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    output = array[0].map((_, colIndex) => array.map(row => row[colIndex]));
    var array = [];
      return(output);
}

module.exports = transpose;
