const fnaf = [1, 2, 3, 69, 420, 88]
const purple = fnaf.filter(num => num >= 5)
console.log(purple)
const afton = fnaf.filter(num => num % 2 === 0)
console.log(afton)
const strings = ["fuck", "fuck machinee", "ass", "cunt", "damn daniel", "inglorious basterds"]
const bumFuck = strings.filter(str => str.length <= 5)
console.log(bumFuck)
const people  = [
    {
        "name" : "brock fucking sampson",
        "age" : "37", 
        "fuckable": "yes"
    }, {
        "name" : "rusty venture",
        "age" : "40", 
        "fuckable": "yes"
    }, {
        "name" : "rick sanchez",
        "age" : "69", 
        "fuckable": "yes"
    }, {
        "name" : "sam pucket",
        "age" : "14", 
        "fuckable": "no"
    }
]
const fuckability = people.filter(obj => obj.fuckable === "yes")
console.log(fuckability)
const age = people.filter(obj => obj.age >= 18)
console.log(age)