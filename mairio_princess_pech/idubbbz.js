class Player {
    constructor(name) {
        this.name  = name
        this.totalCoins = 0
        this.status = 1
        this.hasStar = false
    }
    statusInterpreter() {
        console.log("heeheeheehoohoohoohoo this is text to show the interpreter is firing")
        if (this.status === 0)  {
            let idk = "dead"
        }
        if (this.status === 1) {
            idk = "small"
        }
        if (this.status === 2) {
            idk = "big"
        }
        if (this.status>= 4) {
            idk = "powered up!  yeah baby!"
        }
    }
    gotHit() {
        console.log("you got hit, baby! i hope he at least bought you dinner first!")
        this.status = this.status -  1
    }
    gotPoweredUp() {
        console.log("shagadelic! you got a powerup baby! (its the fire flower from the filthy frank episode)")
        this.status += 1
    }
    addCoin() {
        console.log("you just got a coin! oh, smashing, groovy, yay capitalism!")
        this.totalCoins += 1
    }
    print() {
        console.log(`name: ${this.name}
        total coins: ${this.totalCoins}
         status: ${this.status}
        has star: ${this.hasStar}
        groovy baby! let's go fight bowsser and dankey kang`)
    }
    // rollThoseDiceBaby() {
    //     console.log("roll those dice!!! yeah babey!!!!")
    //     let chance = Math.floor(Math.random() * (3 -0) + 0)
    //     if (chance  === 0) {
    //         console.log(`${this.name} deceased, ham sandwich! baby!`)
    //         this.gotHit()
    //         this.print()
    //     }
    //     if (chance === 1) {
    //         console.log("yeah baby! groovy powerup")
    //         this.gotPoweredUp()
    //         this.print()
    //     }
    //     if (chance === 2) {
    //         console.log("shagadelic! you got a a coin babey!!")
    //         this.addCoin()
    //         this.print()
    //     }
    // }
    // tiTok() {
    //     setInterval(this.rollThoseDiceBaby, 2000);
    //     if (this.status === 0) {
    //         setTimeout(clearInterval, 0)
    //         console.log("you have Died. badly")
    //     }
    // }
}
let mairio = new Player("mairio")
function rollThoseDiceBaby() {
    console.log("roll those dice!!! yeah babey!!!!")
    let chance = Math.floor(Math.random() * (3 -0) + 0)
    if (chance  === 0) {
        console.log(`you rollled the dice and got utterly shagged by themm baby!`)
        mairio.gotHit()
        mairio.print()
    }
    if (chance === 1) {
        console.log("yeah baby! groovy powerup")
        mairio.gotPoweredUp()
        mairio.print()
    }
    if (chance === 2) {
        console.log("shagadelic! you got a a coin babey!!")
        mairio.addCoin()
        mairio.print()
    }
}
let timer
function tikTok() {
    timer = setInterval(function() {
        if (mairio.status === 0) {
            clearInterval(timer)
            console.log("you have Died. badly")
        }
        else {
            rollThoseDiceBaby()
        }
    }, 2000);
}
// let mairio = new Player("mairio")
tikTok()