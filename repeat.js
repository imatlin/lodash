/* Used as references for the maximum safe integer in JavaScript Math.pow(2, 53) - 1 */
const MAX_SAFE_INTEGER = 9007199254740991

/* Built-in method references for those with the same name as other `lodash` methods. */
const nativeFloor = Math.floor

/**
 * Repeats the given string `n` times.
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to repeat.
 * @param {number} [n=1] The number of times to repeat the string.
 * @returns {string} Returns the repeated string.
 * @example
 *
 * repeat('*', 3)
 * // => '***'
 *
 * repeat('abc', 2)
 * // => 'abcabc'
 *
 * repeat('abc', 0)
 * // => ''
 */
function repeat(string, n) {
  let result = ''
  if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
    return result
  }
  // Leverage the exponentiation by squaring algorithm for a faster repeat.
  // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
  do {
    if (n % 2) {
      result += string
    }
    n = nativeFloor(n / 2)
    if (n) {
      string += string
    }
  } while (n)

  return result
}

export default repeat
