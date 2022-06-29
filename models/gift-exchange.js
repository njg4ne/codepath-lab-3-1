const {BadRequestError} = require("../utils/errors")

class GiftExchange {
    static getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }
      

    static pairs(names) {
        if (!names) {
            throw "Cannot make pairs without names array!"
        }
        const isOdd = names.length % 2 === 1;
        if (isOdd) {
            throw new BadRequestError("Cannot pair an odd number of names")
        }
        const pairs = [];
        const namesToUse = [...names];

        while (namesToUse.length > 0) {
            const firstPerson = namesToUse.pop()
            
            const randIdx = GiftExchange.getRandomInt(0, namesToUse.length)
            console.log("Random idx:", randIdx)
            // console.log(firstPerson, randIdx)
            const secondPerson = namesToUse[randIdx];
            namesToUse.splice(randIdx, 1);
            if (firstPerson && secondPerson) {
                pairs.push([firstPerson, secondPerson]);
            }
            else {
                throw "Unexpected error pairing an even number of names"
            }
        }

        return pairs;
    }
    static traditional(names) {
        if (!names) {
            throw "Cannot make traditional exchange without names array!"
        }
        const exchangeLines = [];
        const namesToUse = [...names];

        let currentPerson = namesToUse.pop();
        const firstPerson = currentPerson;
        while (namesToUse.length > 0) {
            const randIdx = GiftExchange.getRandomInt(0, namesToUse.length)
            const recipient = namesToUse[randIdx];
            namesToUse.splice(randIdx, 1);
            const newLine = `${currentPerson} is giving a gift to ${recipient}`;
            currentPerson = recipient;
            exchangeLines.push(newLine);
        }
        const lastLine = `${currentPerson} is giving a gift to ${firstPerson}`;
        exchangeLines.push(lastLine);

        return exchangeLines;
    }

}

module.exports = GiftExchange