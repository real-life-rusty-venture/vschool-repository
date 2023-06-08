const enemies = [
    {
        "name": "the monarch",
    "hp": 100,
    "items": ["butterfly wings", "tranquilizer gun"],
    "mission": "to finally settle his unresolved sexual tension with rusty",
    "banter": "make me copper!!! MUHAHAHAHA!!!!!"
},
    {
        "name": "baron von underbheit",
    "hp": 100,
    "items": ["metal jaw"],
    "mission": "to get revenge on rusty for that thing in college (you know the thing with his jaw)",
    "banter": "you have to give me this one. i've loathed rusty since college!"
},
    {
        "name": "phantom limb",
    "hp": 100,
    "items": ["invisible left arm", "invisible right arm", "invisible left leg", "invisible right leg"],
    "mission": "honestly he's just here to pick on the monarch and try and steal his girlfriend",
    "banter": "no need to get snippy! but if you insist on becoming a problem for me i guess i could spare you a little time..."
},
    {
        "name": "two ton 21",
    "hp": 200,
    "items": ["bulletproof vest", "tranquilizer gun", "butterfly themed throwing knives", "brock's crossbow (thanks brock)"],
    "mission": "to avenge 24's death once and for all!",
    "banter": "dudeeee!!! i'm trying to avenge my best friend's death here! can you PLEASE be cool!"
},
    {
        "name": "the blue morpho",
    "hp": 100,
    "items": ["blue fedora", "dapper blue suit", "suspicious butterfly gear..."],
    "mission": "to...protect rusty venture???",
    "banter": "wha- i'm trying to help you, jackass!!!"
}
]
const readline = require("readline-sync");
const name = readline.question("state your name soldier! ")
console.log(`just kidding. your name's brock fucking sampson sampson soldier!`)
console.log(`but if you wanna be called ${name} as some sick joke all day i guess i'll allow it`)
hp = 300
items = ["communicator watch ", "bowie knife", "world's biggest dick"]
nextMove = ["walk", "check status", "check watch"]
inCombat = false
alive = true
while (alive === true){
    index = readline.keyInSelect(nextMove, "what do you want to do? ")
    switch(index) {
        case 0: walk()
        break;
        case 1: checkStatus()
        break;
        case 2: checkWatch()
    }
}
function walk() {
    console.log(`you, the mighty ${name}, take a step forward.`)
    let chance = Math.floor(Math.random() * (5 - 1 + 1) + 1)
    if (chance % 2 === 0) {
        enemy()
    }
}
function enemy() {
    let random = Math.floor(Math.random() * enemies.length)
    let randomEncounter = enemies[random]
    //console.log(`you are being attacked by ${enemies[random].name}`)
    inCombat = true
    Battle(randomEncounter, random)
    // switch (random) {
    //     // case "the monarch": monarchBattle()
    //     // break;
    //     // case "baron von underbheit": underbheitBattle()
    //     // break;
    //     // case "phantom limb": phantomLimbBattle()
    //     // break;
    //     // case "two ton 21": garyBattle()
    //     // break;
    //     // case "the blue morpho": morphoBattle()
    //     // break;

    //     case 0: monarchBattle()
    //     break;
    //     case 1: underbheitBattle()
    //     break;
    //     case 2: phantomLimbBattle()
    //     break;
    //     case 3: garyBattle()
    //     break;
    //     case 4: morphoBattle()
    //     break;
    // }
}
fightOptions = ["check enemy status", "talk", "fight", "run"]
function Battle(randomEncounter, random) {
    console.log("you're approached by...")
    switch(randomEncounter.name) {
        case "the monarch": monarchBattleIntro()
        break;
        case "baron von underbheit": underbheitBattleIntro()
        break;
        case "phantom limb": phantomLimbBattleIntro()
        break;
        case "two ton 21": garyBattleIntro()
        break;
        case "the blue morpho": morphoBattleIntro()
        break;
    }
    while (inCombat === true) {
        fightOptions = ["check enemy status", "talk", "fight", "run", "check status"]

    pokemonRip = readline.keyInSelect(fightOptions, "what do you want to do? ")
    // let randomEncounter = enemies[random]
    switch (pokemonRip) {
        case 0: enemyStatus(randomEncounter)
        break;
        case 1: Talk(randomEncounter)
        break;
        case 2: fight(randomEncounter, random)
        break;
        case 3: run(randomEncounter)
        break;
        case 4: checkStatus()
    }
    }

}
function monarchBattleIntro() {
    console.log('THE MIGHTY MONARCH!!!!')
    console.log("MONARCH: your ass is grass sampson!")
}
function underbheitBattleIntro() {
    console.log("BARON VON UNDERBHETI!!!!!!")
    console.log("UNDERBHEIT: vengeance shall be mine dr venture!!!")
}
function phantomLimbBattleIntro() {
    console.log("PHANTOM LIMBBBBB!!!!!")
    console.log("PHANTOM LIMB: oh hello brock. do you know if sheila is around?")
}
function garyBattleIntro() {
    console.log("the man, the myth, the legend...TWO TON 21!!!!")
    console.log("21: you won't be forgotten, 24!")
}
function morphoBattleIntro() {
    console.log("who's this?!?!?!?!")
    console.log("NO! it couldn't be...")
    console.log("THE BLUE MORPHO!!!!!")
    console.log("BLUE MORPHO: have no fear, dr venture and friends! I'm here to help!")
}
function enemyStatus(randomEncounter) {
    console.log(`NAME: ${randomEncounter.name}`)
    console.log(`HP: ${randomEncounter.hp}`)
    console.log(`ITEMS: ${randomEncounter.items}`)
    console.log(`MISSION STATEMENT: ${randomEncounter.mission}`)
}
function checkStatus(){
    console.log(`NAME: BROCK FUCKING SAMPSON`)
    console.log(`or """${name}""" as you apparently like to be called these days`)
    console.log(`HP: ${hp}`)
    console.log(`ITEMS: ${items}`)
    console.log("MISSION STATUS: TO KICK SOME GOD DAMN ASS ALREADY!!!")
}
function checkWatch() {
    ventureFamily = ["Rusty Venture", "Hank and Dean", "OSI"]
    convo = readline.keyInSelect(ventureFamily, "who do you call on your watch?")
    switch (convo){
        case 0: rustyTalk()
        break;
        case 1: hankTalk()
        break;
        case 2: osiTalk()
        break;
    }
}
function rustyTalk() {
    console.log("you call up rusty on your communicator watch.")
    console.log("RUSTY: oh hey brock. nice of you to finally check in. finally get  bored of cigarettes and jacking off?")
    console.log("you grit your teeth.")
    console.log(`BROCK: are ya okay doc?`)
    console.log("RUSTY: oh yeah brock, just peachy! don't know what could possibly make today any  better!")
    console.log("RUSTY: ooh, well now that you mention i guess there is ONE thing...")
    console.log("RUSTY: I'M STUCK IN THE PANIC ROOM, I HAVE NO IDEA WHERE THE BOYS ARE,")
    console.log("RUSTY: MY SHOULDER IS DISLOCATED,")
    console.log("RUSTY: AND THERE'S A MILLION FUCKING BUTTERFLY PEOPLE PLAYING LARP ON MY LAWN!!!!!!")
    console.log("RUSTY: DO SOMETHING, BROCK!!!!! DO SOMETHING!!!!!!!")
    console.log("you tell Rusty you're on it and hang up before he can bitch at you any more.")
}
function hankTalk() {
    console.log("you try to get ahold of one of the boys.")
    console.log("hank answers first.")
    console.log("HANK: oh hey brock! i was wondering when i'd be hearing from you!")
    console.log("hank is so happy you'd never guess he was kidnapped.")
    console.log("BROCK: boys, where are you?")
    console.log("HANK: we're in gary's tree fort brock!")
    console.log("DEAN: he says he's giving us the infamous chinese water torture,")
    console.log("DEAN: but it's kinda just like napping under an air conditioner.")
    console.log("you tell the boys you'll be there soon.")
}
function osiTalk() {
    console.log("you call up OSI headquarters.")
    console.log("HUNTER GATHERS: well if it isn't brock god damn sampson!!!!")
    console.log("he mutters the next part under his breath.")
    console.log(` HUNTER: or """${name}""" or whatever the hell you kids wanna be called these days...`)
    console.log("HUNTER: anyways! whatcha call here for son? the latest tea party gossip?")
    console.log("BROCK: well i'd like to know what all these men in colored tights are doing on my lawn")
    console.log("colonel hunter gathers laughs.")
    console.log(`HUNTER: what, don't you remember son? it's march 15th! annual "beat up rusty" day!`)
    console.log("you shake your head to yourself, reminiscing.")
    console.log("how could you forget Beat Up Rusty day,")
    console.log("a tradition that's been well upheld by the supervillain community since rusty was six years old?")
    console.log("BROCK: got it hunter, i'm on this.")
    console.log("HUNTER: you're god damn right you're on this! you're on this like white on rice!")
    console.log("HUNTER: or it'll be your ASS, sampson!")
    console.log("hunter gathers hangs up.")
}
function Talk(randomEncounter) {
    console.log(`you tell ${randomEncounter.name} to get off your lawn.`)
    console.log(`${randomEncounter.name}: ${randomEncounter.banter}`)
}
function fight(randomEncounter, random) {
    const textOptions = [`you punch ${randomEncounter.name} in his big fat stupid head`, `you stomp on ${randomEncounter.name}'s balls`, `you begin to bash ${randomEncounter.name}'s brains in`, 
`you run ${randomEncounter.name} over with a car`, `you tell ${randomEncounter.name} that his parents will always be disappointed in him`,
`you use your bowie knife on ${randomEncounter.name}`]
    let text = Math.floor(Math.random() * textOptions.length)
    let randomText = textOptions[text]
    console.log(randomText)
    let chance = Math.floor(Math.random() * (100 - 40 + 40) + 40)
    randomEncounter.hp = randomEncounter.hp - chance
    //console.log(`${randomEncounter.name}: ow...`)
    const oof = [`${randomEncounter.name}: ow...`, `${randomEncounter.name}: not cool man!`, `${randomEncounter.name}: now that's a little uncalled for`,
`${randomEncounter.name} has started to cry`, `${randomEncounter.name} has begun to seriously regret his decision to fight you`, 
`${randomEncounter.name}: oh fuck im about to get pummeled arent i`]
let randomOof = Math.floor(Math.random() * oof.length)
    let oofResponse = oof[randomOof]
    console.log(oofResponse)
    console.log(`you dealt ${chance} damage!`)
    let enemyChance = Math.floor(Math.random() * (50 - 10 + 10) + 10)
    console.log(`${randomEncounter.name} does ${enemyChance} damage!`)
    const brockEffect = ["you spit out a tooth.", "you can taste blood dripping from your nose.", "you stumble back a few feet before regaining your balance.",
"you attempt to clear your head as that distinct concussion smell takes over your nose.", "you're bleeding a little, but you've had worse.", "you distantly think something might be broken.", 
"you barely felt a thing!"]
let response = Math.floor(Math.random() * brockEffect.length)
    let randomResponse = brockEffect[response]
    console.log(randomResponse)
    console.log("you laugh.")
    const brockThreat = ["BROCK: that the best you've got, punk?", "BROCK: come on! bring it!", "BROCK: nice shot! you'll pay for that one!", 
"BROCK: man! im really getting a good fight out of you!", "BROCK: WOOOO!"]
let threat = Math.floor(Math.random() * brockThreat.length)
    let randomThreat = brockThreat[threat]
    console.log(randomThreat)
    // console.log("you spit out a tooth and laugh.")
    // console.log("BROCK: that the best you've got, punk?")
    hp = hp -  enemyChance
    if (hp <= 0) {
        console.log("BROCK: oh shit")
        console.log("you did not SERIOUSLY just die on me!!!")
        console.log("you're brock god damn sampson!!! get your shit together boy!!!")
        console.log("oh wait, that's right. you can't! because you're DEAD!")
        console.log("consider your corpse dishonorably dismissed soldier!")
        console.log(`${randomEncounter.name} does a fortnite dancce on your grave.`)
        console.log("~*~*~*~YOU LOSE*~*~*~*~")
        inCombat = false
        alive = false
    }
    if (randomEncounter.hp <= 0) {
        console.log(`${randomEncounter.name} falls to the ground.`)
        console.log("congratulations son!")
        items.push(randomEncounter.items)
        for (let i = 0; i < randomEncounter.items.length; i++) {
            console.log(`you got a ${randomEncounter.items[i]}!`)
        }
        inCombat = false
        enemies.splice(random, 1)
        if (enemies.length < 1) {
            alive = false
            console.log("FINALLY all the jackasses on your lawn are dead.")
            console.log("you go collect hank and dean from gary's tree fort.")
            console.log("they're both no worse for wear.")
            console.log("you gather rusty from the panic room.")
            console.log("RUSTY: about time.")
            console.log("later you and hunter gathers go to a titty bar.")
            console.log("~*~*~*~*YOU WIN~*~*~*~")
        }
    }
}
function run(randomEncounter) {
    let chance = Math.floor(Math.random() * (4 - 1 + 1) + 1)
    if (chance % 2 === 0) {
        console.log("you sucessfully ran away! ...for some reason")
        console.log("you're brock god damn sampson aren't you? gr1ow some god damn balls already!!!")
        console.log(`or ${name} or whatever`)
        console.log(`${randomEncounter.name}: brock sampson? running away from ME?`)
        console.log(`${randomEncounter.name}: my my my, how the turn tables!`)
        inCombat =  false
    }
    else {
        console.log("you tried to run away! even worse, you failed!")
        console.log("get it together son! you're brock god damn sampson!")
        console.log(`or ${name} or whatever`)
        console.log(`${randomEncounter.name}: did you actually just try to run away from me?`)
        console.log(`${randomEncounter.name}: and FAIL??? what do you have a stomachache or something?`)
    }
}
