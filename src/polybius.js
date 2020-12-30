const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const alphaTrans = "a,b,c,d,e,f,g,h,(i/j),k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",");

function polybius(input, encode = true) {
    //The most complicated part of this one will be how different encoding and decoding are from each other. I got away with it with the caesar encoder bcause the two process' are essentially identical there, but here it's a different story. So, we'll need to split the function up into two different algorithms, and then find overlaps they could feasibly share to reduce redundancies.

    //First, split the input into an array of lowercased words, each item being a different word. This works for encoding and decoding, because we need to iterate in either instance and toLowerCase() ignores numbers, so it makes sense to do it first.
    const words = input.toLowerCase().split(" ");

    let yCoord = 0;
    let xCoord = 0;
    let letterIndex = 0;

    let result = [];

    if(encode) {
        //ENCODING
        //Now, we iterate over that array of words.
        for(let word in words) {
            const curr0 = words[word];

            //And then iterate over every letter in each word.
            for(let letter in curr0) {
                const curr1 = curr0[letter];

                letterIndex = (alphabet.indexOf(curr1) + 1);

                //If the letterIndex corrosponds to 'J' or higher, than it gets reduced by 1, so that 'J' and 'I' are counted together as one.
                if(letterIndex > 9) {
                    letterIndex = letterIndex - 1;
                }

                yCoord = Math.ceil(letterIndex / 5);

                xCoord = (letterIndex - ((yCoord - 1) * 5));

                result.push(xCoord, yCoord);
            }
            result.push(" ");
        }
    } else {
        //DECODING
        //Again, we iterate over the array of words.
        for(let word in words) {
            const curr0 = words[word];

            //And then iterate over each word's letters, two at a time.
            for(let i = 0; i < curr0.length; i += 2) {

                xCoord = parseInt(curr0[i] - 1);
                yCoord = parseInt(curr0[i + 1] - 1);
                console.log(xCoord, yCoord);

                letterIndex = ((yCoord * 5) + xCoord);
                console.log(letterIndex);

                result.push(alphaTrans[letterIndex]);
            }
            result.push(" ");
        }
    }
    result.pop();
    return result.join("");
}

module.exports = polybius;
