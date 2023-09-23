//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

//Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0.
// function primeMultiplication(number) {
//     const threeFiveArray = []
//     if (!number) {
//         return 0
//     }
//     for (let i = 1; i <= number; i++) {
//         let numberDividedByThree = i / 3
//         if (Number(numberDividedByThree).isInteger()) {
//             threeFiveArray.push(i)
//         }
//         let dividedByFive =  i / 5
//         if (Number(dividedByFive).isInteger() && !Number(numberDividedByThree).isInteger()) {
//             threeFiveArray.push(i)
//         }
//     }
//     let sum = 1
//     for (let i = 1; i <= threeFiveArray; i++ ) {
//         sum * threeFiveArray[i]
//     }
//     return sum
// }
// primeMultiplication(10)
// const solution = number => {
//     let sum = 0;
//     for (let i = 3; i < number; i++) {
//       if (i % 3 === 0 || i % 5 === 0) {
//         sum += i;
//       }
//     }
//     return sum;
//   };
function solutioner(number) {
    let sum = 0
    for (let i = 3; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i
        }
    }
    return sum
}

function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "even"
    }
    return "odd"
}
console.log(evenOrOdd(1))
console.log(evenOrOdd(2))
//The clock shows h hours (0 <= h <= 23), m minutes (0 <= m <= 59) and s seconds (0 <= s <= 59) 
//after midnight. Your task is to write a function which returns the time since midnight in milliseconds. 
//There are 1,000 milliseconds in a second.
function millisecondsPastMidnight(hours, minutes, seconds) {
    const secondsToMilliseconds =  seconds * 1000
    const minutesToMilliseconds = minutes * 60  * 1000
    const hoursToMilliseconds = hours * 60 * 60 * 1000
    const sum = secondsToMilliseconds + minutesToMilliseconds +  hoursToMilliseconds
    return sum
}
console.log(millisecondsPastMidnight(0, 0, 0))
console.log(millisecondsPastMidnight(0, 1, 1))

function namerGreeter(name) {
    return `hello ${name}. im sad to announce that you woke up again this morning`
}
console.log(namerGreeter("egg"))

function century(year) {
    return Math.floor(year / 100) -1
}
console.log(century(1500))
console.log(century(1975))


// Nathan loves cycling. Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of 
// water per hour of cycling. Given the time in hours, you need to return the number of litres of water
//  that Nathan will drink, rounded to the smallest value.
function howMuchPiss(hours) {
    return Math.floor(hours / 2)
}
console.log(howMuchPiss(0))
console.log(howMuchPiss(2))
console.log(howMuchPiss(1787))

//Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
function divisibleByTwo(num1, num2, num3) {
    if (num1 % num2 !== 0) {
        return false
    }
    if (num1 % num3 !== 0) {
        return false
    }
    return true
}
console.log(divisibleByTwo(3, 3, 4))
console.log(divisibleByTwo(12, 3, 4))

function vowelsInString(string) {
    let counter = 0
    for (let char of string) {
        if ("aeiou".includes(char)) {
            counter ++
        }
    }
    return counter
}
console.log(vowelsInString("my dyx"))
console.log(vowelsInString("pear tree"))


function disemvowler(string) {
    // let array = [...string]
    // let filteredArray = array.filter(letter => !"a" || "e" || "i" || "o" || "u")
    // let docBrown = filteredArray.toString()
    // return docBrown
    return string.replace(/[aeiou]/gi, '')
}
console.log(disemvowler("suck my penis"))
console.log(disemvowler("smoke weed every day"))

function oddOneOut(array) {
    return array.reduce((a, b) => a ^ b)
}
console.log(oddOneOut([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); // 5
console.log(oddOneOut([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 5


//day two
//Given a word, your job is to return the middle character(s) of the word. If the word's length is odd, return the middle character. 
//If the word's length is even, return the middle 2 characters.

function fullMiddleMalcolmist(string) {
    // const len = str.length;
    // const mid = len / 2;
    // // For an odd length, len % 2 equals 1 which is truthy
    // return len % 2 ? str[Math.floor(mid)] : str[mid - 1] + str[mid];
    const malcolm = string.length / 2
    if (string.length % 2) {
       return  string[Math.floor(malcolm)]
    }
    return string[malcolm - 1] + string[malcolm]
}
console.log(fullMiddleMalcolmist("lifeisunfair"))
console.log(fullMiddleMalcolmist("postaldude"))
console.log(fullMiddleMalcolmist("fart"))
console.log(fullMiddleMalcolmist("art"))



function buttlicker(arr) {
    if (arr.length <= 0) {
        return "nobody liked this u fucking loser"
    }
    if (arr.length === 1) {
        return `${arr[0]} liked this for some baffling reason`
    }
    if (arr.length === 2) {
        return `${arr[0]} and ${arr[1]} liked your dumb fucking post`
    }
    if (arr.length >= 3) {
        return `${arr[0]}, ${arr[1]}, and ${arr.length - 2} others all liked your dumb fucking post. congratulations. hope it makes you real happy`
    }
}
console.log(buttlicker(["postal dude"]))
console.log(buttlicker(["bench appearo", "dale gribble"]))
console.log(buttlicker(["reigen", "jfk", "spamtom"]))


function phoneMyAss(arr) {
    return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`
}
console.log(phoneMyAss([9, 3, 7, 4, 5, 0, 8, 7, 7, 7]))

function spongebobSquareNuts(number) {
    return Math.sqrt(number) % 1 === 0 ? true : false
}
console.log(spongebobSquareNuts(4))
console.log(spongebobSquareNuts(3))


function mysery(arr) {
    // let bigBoy = 0
    // let littleBoy = 100
    // for (let i = 0; i <=arr; i++) {
    //     if (arr[i] > bigBoy) {
    //         bigBoy =  arr[i]
    //     }
    //     if (arr[i] < littleBoy) {
    //         littleBoy = arr[i]
    //     }
    // }
    // return bigBoy, littleBoy
    return `${Math.max(...arr)}, ${Math.min(...arr)}`

}
console.log(mysery([1, 2, 420, 69]))


function biggerDowner(number) {
    return parseInt(
        number
          .toString()
          .split('')
          .sort((a, b) => b - a)
          .join('')
    // return parseInt(
    //     number.toString().split().sort((a, b) => b - a)
     )
}
console.log(biggerDowner(42069))


function whaddaHellBulnasaur(string) {
    return string
    .split('')
    .map((ele, index) => ele.toUpperCase() + ele.toLowerCase().repeat(index))
    .join('-');
}
console.log(whaddaHellBulnasaur("cat"))

function reverso(string) {
    return string
    .split('')
    .reverse()
    .join('')
}
console.log(reverso("cat"))


function napoleonWord(string) {
    // const arr = string.split(' ')
    // let dewey = 100
    // for (let i = 1; i <arr.length; i++) {
    //     if (arr[i].length <= dewey) {
    //         dewey = arr[i]
    //     }
    // }
    // return dewey
    return Math.min(...string.split(' ').map(item => item.length))
}
console.log(napoleonWord("cat shit fart"))

function mySaggyaVagina(number) {
    return number.toString(2).split(0).join('').length
}

console.log(mySaggyaVagina(0))
console.log(mySaggyaVagina(4))
console.log(mySaggyaVagina(7))
console.log(mySaggyaVagina(9))


function rickyTickyTavvy(string) {
    let exes = 0
    let ogasms = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "x") {
            exes ++
        }
        if (string[i] === "o") {
            ogasms ++
        }
    }
    console.log(exes, "exes")
    console.log(ogasms, "ogasms")
    if (exes == ogasms) {
        return true
    }
    return false
}

console.log(rickyTickyTavvy("xoxo"))
console.log(rickyTickyTavvy('x'))
console.log(rickyTickyTavvy("o"))
console.log(rickyTickyTavvy("cat"))


function imNotJustSeriousImHivPositive(array) {
    let aids = 0
    for (let i = 0; i < array.length; i++) {
        aids = aids + array[i]
    }
    return aids
}
console.log(imNotJustSeriousImHivPositive([1, 1, 1]))
console.log(imNotJustSeriousImHivPositive([2, 3, 5]))
console.log(imNotJustSeriousImHivPositive([2, 2, 4]))


function gambling(array)  {
    let evenSteven = 0
    let oddCock = 0
    for (let i = 0; i < array.length; i++) {
        array[i] %2 === 0 ? evenSteven ++ : oddCock ++
    }
    if (evenSteven > oddCock) {
        for (let i = 0; i <  array.length; i++) {
            if (array[i] % 2 !== 0) {
                return array[i]
            }
        }
    }
    if (evenSteven < oddCock) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                return array[i]
            }
        }
    }
}
console.log(gambling([2, 2, 3, 4]))
console.log(gambling([3, 6, 9]))

function buttSniffer(arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item))
}
console.log(buttSniffer([1, 2, 3], [2]))


function bourgeoise(string) {
    // let splitter = string.split(" ")
    // let gluer = ""
    // for (let i = 0; i < splitter.length; i++) {
    //     gluer = splitter[i][0].toUpperCase()
    //     console.log(gluer[i][0])
    // }
    // gluer.toString()
    // return gluer
    // String.prototype.capitalize = function () {
    //     return this.split(' ')
    //       .map(ele => ele[0].toUpperCase() + ele.slice(1))
    //       .join(' ');
    //   };
    return string.split(" ")
    .map(item => item[0].toUpperCase() + item.slice(1))
    .join(" ")
}
console.log(bourgeoise("suck my dick you aint shit you aint shit"))

function acideDeoxyriboNucleique(string) {
    // string.split("")
    // .map(item => {
    //     if (item === "A") {
    //         return "T"
    //     }
    //     if (item === "T") {
    //         return "A"
    //     }
    //     if (item === "G") {
    //         return "C"
    //     }
    //     if (item === "C") {
    //         return "G"
    //     }
    // })
    const cum = {
        A : "T",
        T : "A",
        G : "C",
        C : "G"
    }
    return [...string].map(item => cum[item]).join('')
}
console.log(acideDeoxyriboNucleique("AAAAAAAAAA"))

function isograms(string) {
    return string.length === new Set(string).size
}
console.log(isograms("a"))
console.log(isograms("aaaa"))


function fizzBuzz() {
    for (let i = 1; i < 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("ballsack!")
        }
        if (i % 3 === 0) {
            console.log("sack")
        }
        if (i % 5 === 0) {
            console.log("ball")
        }
        else {
            console.log(i)
        }
    }
}
fizzBuzz()

function doubleDipper(string)  {
    //return arr1.filter(item => !arr2.includes(item))
    // return string.filter(item => ) 
    // const duplicateCount = text => {
    //     const lowercaseText = text.toLowerCase();
    //     let frequency = {};
    //     let count = 0;
      
    //     for (const letter of lowercaseText) {
    //       frequency[letter] = (frequency[letter] || 0) + 1;
    //       if (frequency[letter] === 2) count++;
    //     }
    //     return count;
    //   };
    let frequency = {}
    let count = 0
    for (const letter of string) {
        frequency[letter] = (frequency[letter] || 0) + 1
        if (frequency[letter] === 2) count ++
        return count
    }
}
console.log(doubleDipper("suck my duck"))
console.log(doubleDipper("jimmy"))