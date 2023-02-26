var music = "msi "
console.log(music.toUpperCase())
var templeRun = "SUCKA MY DICKA"
//console.log(templeRun.toLowerCase())
//console.log(music.concat(templeRun))
var stauber = "we can leave the lights on, sun tan"
console.log(stauber.split(" "))
var tarantino = "kiss ma muthafuckin ayass"
var pulpFiction = tarantino.slice(0,4)
//console.log(pulpFiction)
var fromDuskTillDawn = tarantino.slice(5, 7)
//console.log(fromDuskTillDawn)
var jackieBrown = tarantino.slice(8, 19)
//console.log(jackieBrown)
console.log(tarantino.indexOf("a"))
console.log(tarantino.indexOf("s"))
var deathProof = tarantino.slice(20)
//console.log(deathProof)
var coolUsername = pulpFiction + "-" + fromDuskTillDawn + "-" + jackieBrown + "-" + deathProof
//console.log(coolUsername)
function upperAndLowerCase(x){
    var upperCase = x.toUpperCase()
    var lowerCase = x.toLowerCase()
    var upperLowerCase = upperCase + " " + lowerCase
    console.log(upperLowerCase)
}
upperAndLowerCase("holy mother of maggots!")
function nakedLunch(x){
    var length = x.length
    var halfsies = length/2
    roundThatBitch = Math.floor(halfsies)
    console.log(roundThatBitch)
}
nakedLunch("im so sorry my belovved computer")
function sliceYourDickOff(x){
    var yokel = x.slice(0, x.length/2)
    console.log(yokel)
}
sliceYourDickOff("im the doctor im the patient dont forget that its important")
function ultraSex(x){
    var reddit = x.slice(0, x.length/2)
    var cigarette = x.slice(x.length/2)
    goncharov = reddit.toUpperCase()
    m4st4b8 = cigarette.toLowerCase()
    console.log(goncharov + " " + m4st4b8)
}
ultraSex("ive been denied all the best ultra sex")
var penisHole = "sucka my dicka youa stupida mothafuckas"
var pussyLips = penisHole.split(" ")
console.log(pussyLips)
var bruisedAndBleedingBallsack = []
for (let i = 0; i < pussyLips.length; i++){
    var capitalized = pussyLips[i].charAt(0).toUpperCase() + pussyLips[i].slice(1)
    console.log(capitalized)
    bruisedAndBleedingBallsack.push(capitalized)
    //console.log(capitalized.join(" "))
}
console.log(bruisedAndBleedingBallsack)
var fatCock = bruisedAndBleedingBallsack.join(" ")
var testObjects = ["hatred", "wrath", "suffering", "burn", "burn", "BURN"]
var pussyInMyMouth = testObjects.join(" ")
console.log(pussyInMyMouth)
console.log(testObjects)
console.log(fatCock)
function TwinkMaker(hot, cute, fuckability, quote){
    this.hot = hot
    this.cute = cute
    this.dickSuckingSkill = fuckability
    this.cockSlutStatus = quote
   //// this.noteworthyQuote = function(){
     ///   console.log(quote)
    ///}
}
TwinkMaker.prototype.noteworthyQuote = function(){
    console.log(this.quote)
}
var michaelScott = new TwinkMaker(true, false, 8, "sk8board and suck dick")
console.log(michaelScott)
michaelScott.noteworthyQuote()
//employees: []
function WageSlaveMaker(name, jobTitle, salary, status = "full mothafuckin time bitch"){
    this.wagieName = name
    this.wagieJob = jobTitle
    this.shitPay = salary
    this.shitHours = status
    //employees.push(this)
    nuclearBoobies = console.log(this)
}
var fourChan =  new WageSlaveMaker("hagatha", "whore", "crack_rocks")
console.log(fourChan)
var eightChan = new WageSlaveMaker("knut puncher", "puncher of nuts", "the thrill of the fight")
function cheekSpreader(...assCheeks){
    console.log(assCheeks)
}
cheekSpreader("i", "aint", "gay")
const manMeat = ["chicken shit shit dawg", "aint no problem at all you sick and stupid motherfucker"]
const eggs = ["using this shit as my personal diary", "ive got kinks u woldn't imagine"]
const ohNO = [...manMeat, ...eggs]
console.log(ohNO)
const name = "brock fucking sampson"
const job = "kick ass and get pegged"
console.log(`my name is ${name} and im here to ${job}`)
const jerkOff = (a, b) => a + b
console.log(jerkOff(5, 6))
const loser = word => console.log(`suck my ${word}`)
loser("dick")
const dick = "dick"
const pussy = "pussy"
const tired = "im so fucking tired"
const list = {dick, pussy, tired}
console.log(list)
const gay = {
    character: "donkey kong",
    horny: "yes",
    special_song: "jizz on the wall jizz on the wall jizz on the jizz on the jizz on the wall"
}
const {character, horny, special_song} = gay
console.log(special_song)
const weed = ["suck", "my", "dick", "faggot"]
const [suck, my, diick, faggot] = weed
console.log(faggot)