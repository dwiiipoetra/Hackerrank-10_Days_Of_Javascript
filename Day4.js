// Create a Rectangle Object
function Rectangle(a, b) {
    this.length = a
    this.width = b
    this.perimeter = 2*(a+b)
    this.area = a*b
}

// Count Objects
let objects = [
    { x: 1, y: 1 },
    { x: 2, y: 3 },
    { x: 3, y: 3 },
    { x: 3, y: 4 },
    { x: 4, y: 5 }
]
function getCount(objects) {
    let count = 0
    for (let i in objects) {
        if (objects[i].x === objects[i].y) {
            count++
        }
    }
    return count
}
console.log(getCount(objects))

// Classes
class Polygon {
    constructor(sides) {
        if(!Array.isArray(sides)) throw new Error('data harus berupa Array')
        this.sides = sides
    }   
    perimeter () {
        return this.sides.reduce((a,b) => a+b)
    }
}