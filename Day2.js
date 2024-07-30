// If Else
function getGrade(score) {
    let grade;
    // Write your code here
    if (score <= 30) grade = 'A' 
    if (score <= 25) grade = 'B' 
    if (score <= 20) grade = 'C' 
    if (score <= 15) grade = 'D' 
    if (score <= 10) grade = 'E' 
    if (score <= 5) grade = 'F' 
    return grade;
}

// Loop
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
// Input
// javascriptloops
// Output
// a
// a
// i
// o
// o
// j
// v
// s
// c
// r
// p
// t
// l
// p
// s

function isVowels(char) {
    let vowels = 'aiueoAIUEO'
    return vowels.indexOf(char) !== -1
}

function vowelsAndConsonants(s) {
    let vowels = ''
    let consonants = ''
    let combineStr = ''
    
    for (let str of s) {
        if (isVowels(str)) {
            vowels += str
        } else {
            consonants += str
        }
    }
    
    combineStr = vowels + consonants    
    for (let str of combineStr) {
        console.log(str)    
    }
}

// Switch
function getLetter(s) {
    let letter = '';
    if (s.length >100) return false
    let str = s.toLowerCase()
    switch (str[0]) {
        case ('a' || 'e' || 'o' || 'i' || 'u'):
            letter = 'A';
            break;
        case ('b' || 'c' || 'd' || 'f' || 'g'):
            letter = 'B';
            break;
        case ('h' || 'j' || 'k' || 'l' || 'm'):
            letter = 'C';
            break;
        case ('z' || 'n' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y'):
            letter = 'D';
    }
    return letter;
}