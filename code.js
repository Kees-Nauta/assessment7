function addToZero(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === 0) {
                return true;
            }
        }
    }
    return false;
}
console.log(addToZero([]));         
console.log(addToZero([1]));         
console.log(addToZero([1, 2, 3]));   
console.log(addToZero([1, 2, 3, -2]));
// time o(n^2) space o(1)

function hasUniqueChars(word) {
    let seen = new Set();
    for (let char of word) {
        if (seen.has(char)) {
            return false;
        }
        seen.add(char);
    }
    return true;
}


console.log(hasUniqueChars("Monday"));  
console.log(hasUniqueChars("Moonday")); 
// time o(n) space o(n)

function isPangram(sentence) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let seen = new Set();
    
    for (let char of sentence.toLowerCase()) {
        if (alphabet.includes(char) && !seen.has(char)) {
            seen.add(char);
        }
    }
    
    return seen.size === alphabet.length;
}


console.log(isPangram("The quick brown fox jumps over the lazy dog!")); 
console.log(isPangram("I like cats, but not mice")); 
// time O(n) space o(1)

function findLongestWord(words) {
    let longestLength = 0;
    for (let word of words) {
        longestLength = Math.max(longestLength, word.length);
    }
    return longestLength;
}


console.log(findLongestWord(["hi", "hello"])); 
// time O(n) space o(1)