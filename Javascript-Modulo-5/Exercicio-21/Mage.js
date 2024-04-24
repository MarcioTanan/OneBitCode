const Character = require("./Character")

module.exports = class Mage extends Character {
    constructor(name, lifepoints, attackPts, defensePts, magicsPts){
        super(name, lifepoints, attackPts,defensePts)
        this.magicsPts = magicsPts
    }

    attack(targetCharacter){
        targetCharacter.lifepoints -= (this.attackPts + this.magicsPts) - targetCharacter.defensePts
    }

    heal(targetCharacter){
        targetCharacter.lifepoints += this.magicsPts * 2
    }
}