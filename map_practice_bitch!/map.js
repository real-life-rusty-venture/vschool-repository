const gayNerd = [1, 2, 69, 420, 88]
const gayass = gayNerd.map(num => num*2)
console.log(gayass)
const penisButthole = gayNerd.map(num => num.toString())
console.log(penisButthole)
// var lickMyAsshole = 7
// console.log(lickMyAsshole.toString())
// console.log("hello faggot")
const smegmaPaperCut = ["hello DARKNESS my old FRIEND", "penisButthole", "piperGate", "fourchan"]
// function prolapseAsshole(str) {
//     const fart = str.toUpper(str.charAt(0))
//     const prolapsedUterusGapingOutMyPussy= str.slice(1, -1)
//     const urethra = prolapsedUterusGapingOutMyPussy.toLower()
//     const iHopeWeBothDie = fart + urethra
//     return iHopeWeBothDie
// }
const drewGooden = smegmaPaperCut.map(function(str){
    const theBeachThatMakesYouOLd = str.charAt(0)
    const fart = theBeachThatMakesYouOLd.toUpperCase()
    const prolapsedUterusGapingOutMyPussy= str.slice(1)
    const urethra = prolapsedUterusGapingOutMyPussy.toLowerCase()
    const iHopeWeBothDie = fart + urethra
    return iHopeWeBothDie
})
console.log(drewGooden)
const fuckList = [
    {
        "name" : "Rick Sanchez", 
        "age" : 69,
        "position" : "top"
    },
    {
        "name" : "Rusty Venture",
        "age" : "40",
        "position" : "bottom"
    },
    {
        "name" : "brock fucking sampson",
        "age" : 37,
        "position" : "super top"
    },
    {
        "name" : "carly shay",
        "age" : 14,
        "position" : "N/A"
    }
]
const fuckMachine = fuckList.map(obj => obj.position)
console.log(fuckMachine)
fuckList.map(function(obj) {
    if (obj.age >= 18) {
        console.log(`ooo ${obj.name}...we could build a fuck machine!!! woaaahh...fuck machine`)
    }
    else {
        console.log(`EXCEPT ${obj.name}. she is NOT OLD ENOUGH!!!!!`)
    }
})
fuckList.map(obj => {
    let jfk = document.createElement("h1")
    jfk.textContent = `${obj.name}`
    let jean = document.createElement("h2")
    jean.textContent = `${obj.age}`
    document.getElementById("tiktok").append(jfk)
    document.getElementById("tiktok").append(jean)
    console.log("fuck you fuck you fuck you fuck you fuck you")
})