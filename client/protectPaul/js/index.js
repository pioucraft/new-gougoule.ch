function openTalkBox(message, answers) {
    document.getElementById("theGame-talkBox").innerHTML = `<p id="theGame-talkBox-message">${message}</p><div id="theGame-talkBox-buttons"></div>`
    document.getElementById("theGame-talkBox").style.visibility = "visible"
    for(let i=0; i<answers.length;i++) {
        let answer = answers[i]
        document.getElementById("theGame-talkBox-buttons").innerHTML += `<button class="theGame-talkBox-button" id="theGame-talkBox-buttons-${i}" onclick="${answer.function}">${answer.message}</button>` 
    }
}

function clearTalkBox() {
    document.getElementById("theGame-talkBox").innerHTML = ""
    document.getElementById("theGame-talkBox").style.visibility = "hidden"
}

function startGame() {
    document.getElementById("titles").innerHTML = ""
    document.body.style.backgroundColor = "rgb(128, 238, 232)"
    setTimeout(() => {
        document.body.style.backgroundColor = "rgb(132, 238, 128)"
        setTimeout(() => {
            document.getElementById("theGame").style.visibility = "visible"
            setTimeout(() => {
                openTalkBox("Hello.", [{"message": "Hello ?", "function": "advanceInTheHistory(0)"}])
            }, 1000)
        }, 400)
    }, 400)

}

function breakPaul(message) {
    alert(message)
    location.reload()
}

function advanceInTheHistory(x) {
    if(x == 0) {
        openTalkBox("Anonym : Do you see that beautiful egg?", [{"message": "Yes", "function": "advanceInTheHistory(1)"}, {"message": "No", "function": "advanceInTheHistory(2)"}])
    }
    else if(x == 1) {
        openTalkBox("Anonym : It's my friend's egg. He bought it at the supermarket yesterday and he wants you to protect it.", [{"message": "Ok. Fine, I'll protect it.", "function": "advanceInTheHistory(3)"}, {"message": "What if I don't want to protect it ?", "function": "advanceInTheHistory(4)"}])
    }
    else if(x == 2) {
        openTalkBox("Anonym : Ok. I don't care.", [{"message": "Ok. Great.", "function": "advanceInTheHistory(1)"}])
    }
    else if(x == 3) {
        openTalkBox("Anonym : But you will need to fight against special enemies.", [{"message": "What's so special about them ?", "function": "advanceInTheHistory(5)"}])
    }
    else if(x == 4) {
        openTalkBox("Anonym : I didn't ask about your opinion.", [{"message": "Ok, my bad.", "function": "advanceInTheHistory(3)"}])
    }
    else if(x == 5) {
        openTalkBox("Anonym : They use maths as a toll to attack your egg and you too will you use maths to defend the egg.", [{"message": "That's weird.", "function": "advanceInTheHistory(6)"}])
    }
    else if(x == 6) {
        openTalkBox("Anonym : I don't care, I decide.", [{"message": "OK, fine.", "function": "advanceInTheHistory(7)"}]) 
    }
    else if(x == 7) {
        clearTalkBox()
        setTimeout(() => {
            spawnMonster(0)
            setTimeout(() => {
                openTalkBox("Slime : Hello.", [{"message": "Hi.", "function": "advanceInTheHistory(8)"}]) 
            }, 700);
        }, 1500);
    }
    else if(x == 8) {
        openTalkBox("Slime : I'm here to transform Paul into an omelette.", [{"message": "Don't.", "function": "advanceInTheHistory(9)"}, {"message": "Fine.", "function": "breakPaul('You can't eat Paul. It's illegal.')"}]) 
    }
    else if(x == 9) {
        openTalkBox("Slime : if you want your friend to survive, answer my really complicated math problem. WITHOUT CHEATING !!", [{"message": "Ok.", "function": "advanceInTheHistory(10)"}]) 
    }
    else if(x == 10) {
        openTalkBox("Slime : 1+1", [{"message": "2", "function": "breakPaul('Skill issue.')"}, {"message": "I don\'t know, i failed my 1th grade.", "function": "advanceInTheHistory(11)"}, {"message": "3", "function": "breakPaul('Impossible !!! You cheated')"}]) 
    }
    else if(x == 11) {
        openTalkBox("Slime : 1+1", [{"message": "2", "function": "breakPaul('Skill issue.')"}, {"message": "I don\'t know, i failed my 1th grade.", "function": "advanceInTheHistory(12)"}, {"message": "3", "function": "breakPaul('Impossible !!! You cheated')"}]) 
    }
    else if(x == 12) {
        openTalkBox("Slime : Fine, I understand. I won't touch your friend.", [{"message": "Ok.", "function": "alert('You finished the game and i will probably never make it better, because it is a stupid game. (I don't even know why i started doing this in the first place.)')"}])       
    }
    else if(x == 13) {
        
    }
    else if(x == 14) {
        
    }
    else if(x == 15) {
        
    }
    else if(x == 16) {
        
    }
    else if(x == 17) {
        
    }
    else if(x == 18) {
        
    }
    else if(x == 19) {
        
    }
    else if(x == 20) {
        
    }
    else if(x == 21) {
        
    }
    else if(x == 22) {
        
    }
    else if(x == 23) {
        
    }
    else if(x == 24) {
        
    }
    else if(x == 25) {
        
    }
    else if(x == 26) {
        
    }


}

function spawnMonster(monster) {
    if(monster == 0) {
        document.getElementById("monster").src = "images/monster1.png"
        document.getElementById("monster").style.visibility = "visible"
    }
    else if(monster == 1) {

    }
    else if(monster == 2) {

    }
    else if(monster == 3) {

    }
    else if(monster == 4) {

    }
    else if(monster == 5) {

    }
}
