const fizz = []
const buzz = []
const fizzbuzz =  []
for (let i = 0; i <= 100; i++){
    if (i % 15 === 0){
        console.log("fizzbuzz")
        fizzbuzz.push(i)
    }
    else if (i % 5 === 0) {
        console.log("buzz")
        buzz.push(i)
    }
    else if (i % 3 === 0){
        console.log("fizz")
        fizz.push(i)
    }
    else {
        console.log([i])
    }
}
console.log(`fizz: ${fizz.length}`)
console.log(`buzz: ${buzz.length}`)
console.log(`fizzbuzz: ${fizzbuzz.length}`)
function largest(array){
    let big = []
    for (let i  = 0; i < array.length; i++ ){
        if (array[i] > big) {
            big = array[i]
        }
    }
    console.log(big)
}
console.log(largest([6, 13, 250, 3])) // => 250
console.log(largest([3, 5, 2, 8, 1])) // => 8
console.log(largest([13, 40, 3, 0, 19, 22])) // => 40
function lettersWithStrings(array){
    for (let i = 0; i < array.length; i++){
        if (array[i].includes("e")) {
            console.log(array[i])
        }
    }
}
console.log(lettersWithStrings(["$hello cunts!", "assassass", "test!"]) )// => ["$hello!", "test!"]
console.log(lettersWithStrings(["cunt", "piss", "hell on earth", "Hey!"]))  // => ["C%4!", "Hey!"]
console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"]))  // => []
function isDivisible(a, b){
    if (a % b === 0) {
        return "MAN! That shit is divisible!"
    }
    else {
        return "DOES HE LOOK LIKE A BITCH?"
    }
}
console.log(isDivisible(4, 2)) // => true
console.log(isDivisible(9, 3)) // => true
console.log(isDivisible(15, 4)) // => false
