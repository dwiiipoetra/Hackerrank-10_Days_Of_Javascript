// Day3 - Array
function getSecondLargest(nums) {
    let largestNum = Math.max(...nums);
    let secondLargestNum = nums.sort((a,b)=> b-a)
    .find(secondLargest => secondLargest < largestNum)

    return secondLargestNum
}

// Day3 - Throw
function isPositive(a) {
    let message = ''
    
    if (a < 0) message = 'Negative Error'
    else if (a === 0) message = 'Zero Error'
    else if (a > 0) message = 'YES'
    
    return message
}

// Day3 - Try, Catch, and Finally
function reverseString(s) {
    var reverseStr
    try {
        if(typeof s === 'number') {
            reverseStr = s.toString().split('').reverse().join('')
        }
        reverseStr = s.split('').reverse().join('')
    } catch(err) {
        console.log(err.message)
        console.log(s)
        return
    } finally {
        if(typeof s === 'string') console.log(reverseStr)
    }
}
// reverseString(123)
// reverseString('qwe')
// reverseString('123')