const name = "Jon Arbuckle"
const age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        // var pets[i] = {
        //     pets[i].name: pets[i] === "cat" ? "garfield" : "odie"
        // }
        if (pets[i] === "cat") {
            pets[i].name = "garfield"
        } else {
            pets[i].name = "odie"
        }
        console.log(pets[i].name)
        console.log(`pet's name: ${pets[i].name}`)
        pet.name = pets[i].name
        petObjects.push(pet)
    }
    console.log(`owners name: ${name}`)
    return petObjects
}

runForLoop(["cat", "dog"])
const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(carrot => {
        return { type: "carrot", name: carrot }
    })
}
console.log(mapVegetables(carrots))
const people = [
    {
        name: "Princess Pech",
        friendly: true
    },
    {
        name: "green count",
        friendly: true
    },
    {
        name: "Mairio",
        friendly: true
    },
    {
        name: "Bowsser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => {
        return person.friendly
    })
}
console.log(filterForFriendly(people))
doMathSum = (a, b) => {
    return a + b
}

produceProduct = (a, b) => {
    return a * b
}
console.log(doMathSum(5, 2))
console.log(produceProduct(2, 3))
birthdayDad = (firstName = "soldier", lastName = "tf2", age = 69) => {
    return `hello ${firstName} ${lastName}, apparently you're ${age} today. god help your rapidly hellbound soul!`
}
console.log(birthdayDad())
console.log(birthdayDad("scout", "team fortress", 12))
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 filterForDogs = (arr) => arr.filter(animal => animal.type === "dog" ? true : false)
 console.log(filterForDogs(animals))
 impersonator = (name, age) => {
    console.log(`my name is ${name} and i love lasagna. i will die at age ${age} from cigarettes.`)
 }
 impersonator("garfield", 69)
collectAnimals = (...animals) => animals
console.log(collectAnimals("odie", "garfield", "the mouse from garfield", "joe biden (he's lost)", "pussy"))
function combineFruit(fruit, sweets, vegetables){
    return {}
}
let food = {
    fruits: [],
    sweets: [],
    vegetables: []
}
combinedFood = (fruits, sweets, vegetables) => {
    food.fruits.push(fruits)
    food.sweets.push(sweets)
    food.vegetables.push(vegetables)
}
combinedFood(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"])
console.log(food)
function parseSentence({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`
  }
  
  console.log(parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
  }))
returnFirst = items => items[0]
console.log(returnFirst(["ring ring ring ring ring ring ring",
"banana phone",
"now where could my pipe be",
"GARFIELD!!!!"]))
const favoriteActivities = ["milksteak", "magnets", "little green ghouls", "charlie work", "niightcrawlers"];
returnFavorites = arr => `my top 3 favorites are ${arr[0]}, ${arr[1]}, and of course ${arr[2]}`
console.log(returnFavorites(favoriteActivities))
combineAnimals = (real, magical, mysterious) => [real, magical, mysterious] /*maybe fix this*/
const realAnimals = ["odie", "garfield", "the mouse from garfield"];
const magicalAnimals = ["joe biden (he's lost)"];
const mysteriousAnimals = ["perry the platypus"];
console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))
product =  (...numbers) => {
  var linkPark = [numbers]
  return linkPark.reduce(function(acc, number) {
    return acc * number;
  })
}
console.log(product(1, 2, 3, 4, 69, 420, 88))
function unshift(array, ...ex) {
    return [ex, ...array];
}
console.log(unshift(["shit", "piss", "fuck", "cunt"], "mega", "bega", "gandalf", "big", "naturals"))
// populatePeople = names => {
//     return names.map(name => {
//         namer = name.split(" ")
//         console.log(namer)
//         for (let i = 0; i > namer.length; i++ ) {
//             if (namer[i] % 2 === 0) {

//             }
//         }
//         );
        // return {
        //     firstName: firstName,
        //     lastName: lastName
        // }
//     })
// }

// populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
const spiderPussy = "eight legs. seven vaginas. imagine"
const legs = spiderPussy.split(".")
console.log(legs)
class PussyMachine {
    constructor(gender, pussyStatus, bottom, submissive) {
        this.gender = gender;
        this.pussyStatus =  pussyStatus;
        this.bottom = bottom;
        this.submissive = submissive
    }
    horny() {
        console.log(`im a ${this.gender} ${this.bottom} ${this.submissive}`)
    }
}
const rusty = new PussyMachine("femboy", "100%", "bottom", "submissive")
rusty.horny()
class Femboy extends PussyMachine {
    constructor (gender, pussyStatus, bottom, submissive, bussy) {
        super(gender, pussyStatus, bottom, submissive)
        this.gender = gender
        this.pussyStatus = pussyStatus
        this.bottom = bottom
        this.submissive = submissive
        this.bussy = bussy
    }
}
const me = new Femboy("transgender femboy", "100%", "bottom", "submissive", "yes")
me.horny()