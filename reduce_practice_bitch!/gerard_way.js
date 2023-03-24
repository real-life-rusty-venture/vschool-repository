// const numbers = [1, 2, 3, 69, 420, 88]
// const jackassery = numbers.reduce((final, numbers) => {
//     final += numbers
//     return final
// })
// console.log(jackassery)
// const afton = numbers.reduce((final, numbers) => {
//     numbers.toString()
//     return final
// },"")
// console.log(afton)
// const shitFuck =  7
// const cykaBlyat = shitFuck.toString()
// console.log(cykaBlyat)
// console.log(typeof cykaBlyat)
// const voters = [
//     {
//         "name": "randy savage",
//         "age": 69,
//         "voted": true,
//     }, {
//         "name": "rusty venture",
//         "age": 40,
//         "voted": false,
//     }, {
//         "name": "brock sampson",
//         "age": 36,
//         "voted": false,
//     }, {
//         "name": "hunter gathers",
//         "age": 50,
//         "voted": true,
//     }, {
//         "name": "carly shay",
//         "age": 18,
//         "voted": true,
//     }, {
//         "name": "same puckett",
//         "age": 18,
//         "voted": false,
//     }, 
// ]
// const andHeWantsYouToFuckingKillYourselfYouGodDamnPrancyBastard = voters.reduce((final, voter) => {
//     if (voter.voted)  {
//         final ++
//     }
//     return final
// }, 0)
// console.log(andHeWantsYouToFuckingKillYourselfYouGodDamnPrancyBastard)
// const expensiveThings = [ {
//     "thing": "child slave",
//     "price" : 20
// }, {
//     "thing": "elon musk's severed ballsack",
//     "price" : 200000
// }, {
//     "thing": "black market human organs",
//     "price" : 400
// },  {
//     "thing": "third world country",
//     "price" : 50
// }]
// const price  =  expensiveThings.reduce((final, thing) => {
//     final += thing.price
//     return final
// }, 0)
// console.log(price)
// const fuckingAngry = [
//     ["shit", "fuck", "piss"],
//     [1, 2, 3],
//     [true, false, true]
// ]
// const seethingMad = fuckingAngry.reduce((final, thing) => {
//     final.push(thing)
//     return final
// }, [])
// console.log(seethingMad)
// console.log(jackassery)
// const afton = numbers.reduce((final, numbers) => {
//     numbers.toString()
//     return final
// },"")
const voters = [
    {
        "name": "randy savage",
        "age": 69,
        "voted": true,
    }, {
        "name": "rusty venture",
        "age": 40,
        "voted": false,
    }, {
        "name": "brock sampson",
        "age": 36,
        "voted": false,
    }, {
        "name": "hunter gathers",
        "age": 50,
        "voted": true,
    }, {
        "name": "carly shay",
        "age": 18,
        "voted": true,
    }, {
        "name": "same puckett",
        "age": 18,
        "voted": false,
    }, 
]
const categorized = voters.reduce((final, person) => {
    if (person.age <30) {
        final.youngPeople++
    }
    if (person.age < 30 && person.voted) {
        final.youngVotes++
    }
    if (person.age < 30 && person.age < 50 && person.voted) {
        final.midVotes++
    }
    if (person.age >= 30 && person.age < 50) {
        final.midPeople++
    }
    if (person.age >= 50) {
        final.oldPeople++
    }
    if (person.age >= 50 && person.voted) {
        final.oldVotes++
    }
    return final
}, {"youngVotes" : 0,
    "youngPeople" : 0,
    "midVotes" : 0,
    "midPeople": 0, 
    "oldVotes" : 0,
    "oldPeople": 0
})
console.log(categorized)
const arrays = [
    ["scout", "pyro", "soldier"],
    ["sniper", "medic", "spy"],
    ["demo", "heavy", "engineer"]

]
const reducedArray = arrays.reduce((final, tf2Guy) => {
    return [...final, ...tf2Guy]
}, [])
console.log(reducedArray)
const numbers = [1, 2, 3, 4, 5, 69, 420]
// const reducedNumbers = numbers.reduce((final, number) => {
//     number.toString()
// })
// console.log(reducedNumbers)
function reducedNumbers(array) {
    test = array.reduce(function(final, num) {
        final+= num
        return final
    },"")
    console.log(test)
}
reducedNumbers(numbers)
console.log(typeof test)
const people = [
    {
    "firstName": "Rusty",
    "lastName": "Venture",
    "age": 40}, {
    "firstName": "Brock",
    "lastName": "Sampson",
    "age": 37}, {
    "firstName": "Hunter",
    "lastName": "Gathers",
    "age": 50}, {
    "firstName": "Pete",
    "lastName": "White",
    "age": 45}, {
    "firstName": "Carly",
    "lastName": "Shay",
    "age": 14}, {
    "firstName": "Sam",
    "lastName": "Puckett",
    "age": 14}, {
    "firstName": "Dean",
    "lastName": "Venture",
    "age": 15}, {
    "firstName": "Hank",
    "lastName": "Venture",
    "age": 15}
]
const adults = []
people.forEach((person) => {
    if (person.age >= 18) {
        adults.push(person)
    }
})
console.log(adults)
const alphabetical = adults.sort((a, b) => {
    return a.lastName.localeCompare(b.lastName)
})
console.log(alphabetical)
const strings = alphabetical.map((guy) => {
    return `have i ever told you about ${guy.firstName} ${guy.lastName}? the fucker is ${guy.age} years old and he still acts like this!`
})
console.log(strings)
const morePeople = [
    {
    "firstName": "enrico",
    "lastName": "metassa",
    "age": 15}, {
    "firstName": "malcom",
    "lastName": "monarch",
    "age": 40},
]
morePeople.forEach((person) => {
    people.push(person)
})
console.log(people)
const ventures = []
const racism = people.filter((person) => {
    if (person.lastName.charAt(0) !== "V") {
        return person
    }
    else {
        ventures.push(person)
    }
})
console.log(ventures)
console.log(racism)
const pussy = people.splice(1, 1)
console.log(pussy)
console.log(people)
elpeop = people.reverse()
console.log(elpeop)