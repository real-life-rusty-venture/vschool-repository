var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase()
var shift = parseInt(readline.question('How many letters would you like to shift? '))
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// const cypherMap = alphabet.map(item => {
// })
function cypherMap() {
    return input
    .toLowerCase()
    .split("")
    .map(item => {
        const index = alphabet.indexOf(item)
        const sum = index + shift
        if (sum > 25) {
            return alphabet[sum - 26]
        }
        return alphabet[sum]
    })
    .join("")
}
console.log(cypherMap(input))