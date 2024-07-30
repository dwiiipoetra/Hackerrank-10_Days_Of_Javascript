// Inheritance
/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
*/
Rectangle.prototype.area = function() {
    return this.w * this.h
}
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
*/
class Square extends Rectangle {
    constructor(s) {
        super(s)
        this.w = s
        this.h = s
    }
}

// Template Literals
function sides(literals, ...expressions) {
    let [A,P] = expressions
    let s1 = (P + (Math.sqrt(P*P-(16) * A))) / 4
    let s2 = (P - (Math.sqrt(P*P-(16) * A))) / 4
    let sorted = [s1,s2].sort((a,b) => a-b)

    return sorted
}

// Arrow Functions
function modifyArray(nums) {
    return nums.map(data => {
        if (data %2 === 0) return 2*data
        else return 3*data
    })
}