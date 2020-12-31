const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function caesar(input, shift, encode = true) {
    //Encoding versus decoding should be relatively simple, if I can work out the details (too bad I started working on this last!)...
    //My thinking is that encoding a message involves shifting all the letters in one direction, so decoding is as simple as shifting it back in the opposite direction, by the same amount. So, before the main body of the algorithm iterates over the message, we just need to subtract the shift parameter by itself times two! (Or, alternatively, subtract it from 0. Same diff.)

    if (!shift || shift > 25 || shift < -25 || shift === 0) return false;
    //First, make sure we've recieved usable parameters.

    let result = [];

    if(!encode) shift = (0 - shift);
    //(Here's that shift code I mentioned...)

    const words = input.toLowerCase().split(" ");
    //Next, transfer the input message to all lowercase and split it into an array of individual words.
    
    for(let word in words) {
        //Then, iterate through that array of words...
        const curr = words[word];

        for(let letter in curr) {
            //... and within each word, iterate through each letter, performing the caesar encoding.
            const curr0 = curr[letter];

            let letterIndex = alphabet.indexOf(curr0);
            //The caesar encoding is accomplished by A) finding the index of the current letter in the alphabet vaiable...

            if((letterIndex + shift) > 25) {
                letterIndex -= 26;
            } else if((letterIndex + shift) < -25) {
                letterIndex += 26;
            };
            //.. B) checking if the letter index plus the shift value is Ba) greater than 25 (and subtracting 25 if true), or Bb) less than -25 (and subtracting if true).

            result.push(alphabet[letterIndex + shift]);
            //... and C) finding the letter at that index plus the shift parameter and pushing the result array with the letter found.
        }
        result.push(" ");
        //After iterating through each letter in a word, we then push the result with a space, to divide the words back up.
    }
    result.pop();
    return result.join("");
    //After iterating through every word, the result should now contain an array of successfully encoded letters divided by the correct spacing. All that's left to do is to remove the last space added and then join the array into the FINAL RESULT.
}

module.exports = caesar;
