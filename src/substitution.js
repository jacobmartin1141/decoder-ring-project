const realAlpha = "abcdefghijklmnopqrstuvwxyz";

function findRepeatLetters(input) {
    let letters = input.split("");
    letters.sort((valueA, valueB) => ((valueA > valueB) ? -1 : 1));

    let prevLetters = [];
    for(let letter in letters) {
        const curr0 = letters[letter];

        if(prevLetters.includes(curr0)) {
            return true;
        } else {
            prevLetters.push(curr0);
        }
    }
    return false;
}

function substitution(input, cypher, encode = true) {
if (!(cypher.length === 26) || findRepeatLetters(cypher)) return false;

    //Declare two variables, current and intended cyphers
    let intendedAlpha = "";
    let currentAlpha = "";
    let result = [];

    //Assign one or the other as the cypher cypher
    if(encode) {

        //If we're encoding, current is the real cypher
        currentAlpha = realAlpha;
        intendedAlpha = cypher;

    } else {

        //If we're decoding, current is the cypher cypher.
        currentAlpha = cypher;
        intendedAlpha = realAlpha;
            //Fun story for the graders here! I worked on this function forever, and couldn't get decoding to work and I didn't know why. Turns out, I was assigning to a variable called 'intendedAlphabet' instead of 'intendedAlpha' (which it didn't get mad about even though I never declared it)! Fun times! (:
        console.log(currentAlpha);
    };

    const words = input.toLowerCase().split(" ");

    //Transfer the message from the current cypher to the intended
    for(let word in words) {
        //Loop through the message
        const curr0 = words[word];

        for(let letter in curr0) {
            const curr1 = curr0[letter];

            //get the indexOf the current letter in the 'current' cypher
            const letterIndex = currentAlpha.indexOf(curr1);

            //get the letter from 'intended' cypher at that index and push it to the result.
            result.push(intendedAlpha[letterIndex]);
        }

        result.push(" ");
    }

    result.pop();
    return result.join("");
}

module.exports = { "substitution" : substitution, "findRepeatLetters" : findRepeatLetters};
