const readline = require("readline-sync");
const name = readline.question("What is your name, my good bitch? ");
console.log(`hello ${name}, today we are going to play a game. because i just kidnapped your little bitch ass jigsaw style.`)
console.log("you are chained by the ankle in a gross dirty bathroom.")
console.log("to your left is a suspicious blonde guy. in between the two of you is a dead body.")
nextMove = ["open door", "find key", "talk to blonde" ]
index = readline.keyInSelect(nextMove, "what do you do? ")
console.log(index)
switch (index){
    case 0: triedToOpenDoor() //first level of decision tree
    switch (index){
        case 1: triedToFindKey() //second level of decision tree
        switch (answer){
            case 0: searchBathroom() //third level
                switch (index){
                case 1: triedToOpenDoor() //fourth level //literally why would i need this the character has already tried to open
                break; //the door and the option has been removed. why did i put this here
                case 2: talkToBlonde() //fourth level
                switch (index){
                    case 3: useSaw() //fifth level
                    switch(index){
                        case 4: sawOffFoot() //fifth level 
                        switch(index){
                            case 5: limpToDoor() //sixth level
                        }
                    }
                }
                break;
                case 3: useSaw() //fourth level
                switch(index){ 
                    case 2: talkToBlonde() //fifth level
                    switch(index){
                        case 4: sawOffFoot() //sixth level
                        switch(index){
                            case 5: limpToDoor() //seventh level
                        }
                    }
                    break;
                    case 4: sawOffFoot() //fifth level
                    switch(index){
                        case 2: talkToBlonde() //sixth level
                            switch(index){
                                case 5: limpToDoor() //seventh level
                            }
                        break;
                        case 5: limpToDoor() //sixth level
                        break;
                    }
                    break;
                }
                break;
            case 1: searchBody() //third level //i can't get this to fire no matter what i do
            //switch (index){
                //case 0: talkToBlonde() //fourth level
                //switch(index){
                //    case 0:
                //        triedToFindKey()
                //}
                //break;
            //}
        }
        break;
        //case 1: searchBody()
        //break;
        }
        break;
        case 2: talkToBlonde() //second level
        switch(index){
            case 1:
                triedToFindKey() //third level
                switch(answer){
                    case 0: searchBathroom() //fourth level
                    switch(index){
                        case 3: useSaw() //fifth level
                        switch(index){
                            case 4: sawOffFoot() //sixth level
                            switch(index){
                                case 5: limpToDoor() //seventh level
                            }
                        }
                    }
                    break;
                    case 1: searchBody() //fourth level
                    switch(index){
                        case 3: playCasette() //fifth level
                        break;
                        case 4: useGun() //fifth level
                        break;
                    }
                    break;
                }
                break;
        }
        break;
    }
    break;
    case 1: triedToFindKey() //first level of decision tree
    switch (answer){
        case 0: searchBathroom() //second level //find key, search bathroom
        switch (index){
            case 0: triedToOpenDoor() //third level //find key, search bathroom, open door
            switch(index){
                case 2: talkToBlonde() //fourth level //find key, search bathroom, open door, talk to blonde
                switch(index){
                    case 3: useSaw() //fith level //find key, search bathroom, open door, talk to blonde, use saw
                    switch(index){
                        case 4: sawOffFoot() //sixth level //find key, search bathroom, open door, talk to blonde, use saw, saw off foot
                        switch(index){
                            case 5: limpToDoor() //seventh level //find key, search bathroom, open door, talk to blonde, use saw, saw off foot
                            break;
                        }
                        break;
                    }
                    break;
                }
                break;
                case 3: useSaw() //fourth level //find key, search bathroom, open door, use saw
                switch(index){
                    case 2: talkToBlonde() //fifth level //find key, search bathroom, open door, use saw, talk to blonde
                    switch(index){
                        case 4: sawOffFoot() //sixth level //find key, search bathroom, open door, use saw, talk to blonde, saw off foot
                        switch(index){
                            case 5: limpToDoor() //seventh level //find key, search bathroom, open door, use saw, talk to blonde, saw off foot, limp to door
                        }
                    }
                    break;
                    case 4: sawOffFoot() //fifth level //find key, search bathroom, open door, use saw, saw off foot
                    switch(index){
                        case 2: talkToBlonde() //sixth level //find key, search bathroom, open door, use saw, saw off foot, talk to blonde
                        switch(index){
                            case 5: limpToDoor() //seventh level //find key, search bathroom, open door, use saw, saw off foot, talk to blonde, limp to door
                        }
                        break;
                        case 4: limpToDoor() //sixth level //find key, search bathroom, open door, use saw, saw off foot, limp to door
                    }
                }
                break;
            }
            break;
            case 2: talkToBlonde() //third level //find key, search bathroom, talk to blonde
            switch(index){
                case 0: triedToOpenDoor() //fourth level //find key, search bathroom, talk to blonde, open door
                switch(index){
                    case 3: useSaw() //fifth level //find key, search bathroom, talk to blonde, open door, use saw
                    switch(index){
                        case 4: sawOffFoot() //sixth level //find key, search bathroom, talk to blonde, open door, use saw, saw off foot
                        switch(index){
                            case 5: limpToDoor() ///seventh level //fine key, search bathroom, talk to blonde, open door, use saw, saw off foot, limp to door
                            break;
                        }
                        break;
                    }
                    break;
                }
                break;
                case 3: useSaw() //fourth level //find key, search bathroom, talk to blonde, use saw
                switch(index){
                    case 0: triedToOpenDoor() //fifth level //find key, search bathroom, talk to blonde, use saw, open door
                    switch(index){
                        case 4: sawOffFoot() //sixth level //find key, search bathroom, talk to blonde, use saw, open door, saw off foot
                        switch(index){
                            case 5: limpToDoor() //seventh level //find key, search bathroom, talk to blonde, use saw, open door, saw off foot, limp to door
                        }
                    }
                    break;
                    case 1: talkToBlonde() //fifth level //find key, search bathroom, talk to blonde, use saw, talk to blonde //THIS MAKES NO FUCKING SENSE
                    break;
                    case 3: sawOffFoot() //fifth level //find key, search bathroom, talk to blonde, use saw, saw off foot
                    switch(index){
                        case 0: triedToOpenDoor()
                        break;
                    }
                    break;
                }
                break;
            }
            break;
            case 3: useSaw() //third level ///find key, search bathroom, use saw
            switch(index){
                case 0: triedToOpenDoor() //fourth level //find key, search bathroom, use saw, open door
                break;
                case 2: talkToBlonde() //fourth level //find key, search bathroom, use saw, talk to blonde
                break;
                case 4: sawOffFoot() //fourth level //find key, search bathroom, use saw, saw off foot
                switch(index){
                    case 2: talkToBlonde() //fifth level //find key, search bathroom, use saw, saw off foot, talk to blonde
                    switch(index){
                        case 5: limpToDoor() //sixth level //find key, search bathroom, use saw, saw off foot, talk to blonde, limp to door
                        break;
                    }
                    break;
                    case 4: limpToDoor() //fifth level //find key, search bathroom, use saw, saw off foot, limp to door
                    break;
                }
                break;
            }
            break;
        }
        break;
        case 1: searchBody() //second level //find key, search body
        switch (index){
            case 0: triedToOpenDoor() //third level //find key, search body, open door
            break;
            case 1: talkToBlonde() //third level //find key, search body, talk to blonde
            break;
            case 3: playCasette() //third level //find key, search body, play casette
            case 4: useGun() //third level //find key, search body, use gun
            break;
        }
        break;
    }
    break;
    case 2: talkToBlonde() //first level of decision tree
    switch (index){
        case 0: triedToOpenDoor() //second level //talk to blonde, open door
        switch(index){
            case 1: triedToFindKey() //third level //talk to blonde, open door, find key
            break;
        }
        break;
        case 1: triedToFindKey() //second level //talk to blonde, find key
        break;
    }
    break;
}
function triedToFindKey(){
    var meOrBody = ["look around the bathroom", "search body"]
    console.log("where do you start your search?")
    //console.log(nextMove)
    //console.log(index)
    //console.log(meOrBody)
    answer = readline.keyInSelect(meOrBody)
    //console.log(answer)
}
function triedToOpenDoor(){
    console.log("you can't reach the door, as you are chained to a pipe. but you're guessing it's probaly locked.")
    console.log("maybe it's time to start looking around.")
    delete nextMove[0]
    //console.log(nextMove)
    //console.log(index)
    index = readline.keyInSelect(nextMove, "what do you do? ")
}
function searchBathroom(){
    console.log("you look around this dim and dirty bathroom.")
    console.log("more than anything else you find that you are disgusted.")
    console.log("but you also found a small hand saw.")
    nextMove.push("use saw")
    delete nextMove[1]
    //console.log(nextMove)
    //console.log(index)
    index = readline.keyInSelect(nextMove, "what do you do? ")
}
function searchBody(){
    console.log("hesitantly and with a grimace you begin to search the body.")
    console.log("you find a casette in one hand.")
    console.log("you find a revolver in the other.")
    nextMove.push("play casette")
    nextMove.push("use revolver")
    delete nextMove[1]
    //console.log(nextMove)
    //console.log(index)
    index = readline.keyInSelect(nextMove, "what do you do? ")
}
function talkToBlonde(){
    console.log(`before you can say anything the blonde man starts waving his arms and screaming.`)
    console.log(`blonde: "I DON'T KNOW ANYTHING ABOUT ANYTHING MAN! I'VE NEVER MET THESE PEOPLE BEFORE!`)
    console.log(`I'M INNOCENT!"`)
    console.log("seconds later the man breaks down crying.")
    console.log(` blonde: "OKAY FINE!!!!!!! You finally got to me with all your relentless petsering!`)
    console.log(`my name is dr lawrence buttsniffer and i cheated on my FUCKING wife."`)
    console.log("you sit there for a moment, baffled.")
    delete nextMove[2]
    //console.log(nextMove)
    c//onsole.log(index)
    index = readline.keyInSelect(nextMove, "what do you do? ")

}
function useSaw(){
    console.log("you begin to try and saw through your chain.")
    console.log("almost immediately your saw begins to break.")
    console.log("to your horror you realize the saw is not meant for the chain at all.")
    delete nextMove[3]
    nextMove.push("saw off foot")
    //console.log(nextMove)
    //console.log(index)
    index = readline.keyInSelect(nextMove, "what do you do? ")
}
function sawOffFoot(){
    console.log("well, this isn't going to be pretty.")
    console.log("after looking for something to bite down on,")
    console.log("you begin the slow and painful process of sawing off your own foot.")
    console.log("you attempt to scream through gritted teeth.")
    console.log("...")
    console.log("some time later, you have a leg that ends in nothing but a spurting bloody stump.")
    console.log("you are now free from your chains.")
    delete nextMove[0]
    delete nextMove[4]
    nextMove.push("limp to door")
    //console.log(nextMove)
    //console.log(index)
    index = readline.keyInSelect(nextMove, "what do you do? ")
}
function limpToDoor(){
    console.log("hey, turns out this door's unlocked!")
    console.log("~*~*~*~*~CONGRATULATIONS, YOU HAVE WON!~*~*~*~*~")
    console.log("i hope you had fun playing my first completed console rpg!")
    console.log("refresh your terminal to play again.")
}
function playCasette(){
    console.log("you put the casette in a tapedeck and press play.")
    console.log(`jigsaw: "WELCOME TO THE THUNDERDOME SLUTS!!!!`)
    console.log(`hahahahaha!!!!`)
    console.log(`i'm just fucking with you, we like to have fun here.`)
    console.log(`anyways...`)
    console.log(`${name}, you are trapped in this dirty smelly bathroom`)
    console.log(`because you are a filthy, disgusting,`)
    console.log(`DISCORD MODERATOR."`)
    console.log("you being to sweat profusely.")
    console.log(`jigsaw: "YEAH THAT'S RIGHT BITCH!!!! I'VE SEEN YOUR DMS!!!`)
    console.log(`"come hither kitten" that shit is DISGUSTING!`)
    console.log(`i mean seriously bro how old was she?`)
    console.log(`like how old did you honestly think that girl was. be honest."`)
    console.log("you sweat harder.")
    console.log("lawrence is beginning to saw off his foot to get away from you.")
    console.log(`jigsaw: "so yeah. ${name}, your mission is to`)
    console.log(`saw off your foot and find the key and start appreciating life`)
    console.log(`or whatever. and just please, for the love of god, get off the internet man."`)
    console.log("lawrence shakes his head in agreement.")
    console.log(`lawrence: "yeah man."`)
    console.log("jigsaw laughs like a soccer mom.")
    console.log(`jigsaw: "oh, you boys kill me. anyways! lawrence,`)
    console.log(`you're here because you cheated on your FUCKING wife."`)
    console.log("lawrence begins to sob.")
    console.log(`jigsaw: "real dick move man. just not cool at all.`)
    console.log(`your mission is to saw off your leg and appreciate life or whatever, and also shooot ${name} in the head.`)
    console.log(`${name}: "WHAT?!?"`)
    console.log(`jigsaw: "i've seen the estrogen blackmail cult harem server man!!! i've seen it all!!!!!"`)
    console.log("by this time lawrence has already finished sawing off his foot.")
    console.log("he hurriedly limps over to you and grabs the gun")
    console.log("and swiftly performs stalin's signature move.")
    console.log(`~*~*~*~*~YOU LOSE~*~*~*~*~`)
    console.log("to play again, refresh ur terminal")
}
function useGun(){
    console.log("without asking any questions, you shoot lawrence right in his ******* face.")
    console.log("his head explodes like someone hitting a watermelon with a sledgehammer.")
    console.log("you shoot the chain. it breaks.")
    console.log("you get up and walk out the surprisingly unlocked door,")
    console.log("without even having to lose a foot.")
    console.log("~*~*~*~YOU WIN~*~*~*~")
    console.log("hope you liked my first finished console rpg!")
    console.log("to play again, refresh ur terminal")
}