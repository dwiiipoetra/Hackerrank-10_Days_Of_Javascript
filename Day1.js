// Arithmetic Operators
function getArea(length, width) {
    let area = length * width;
    return area;
}

function getPerimeter(length, width) {
    let perimeter = 2 * (length + width);
    return perimeter;
}

// Functions
function factorial(n) {
    let num = 1
    for (let i=n; i>0; i--) num *= i
    return num
}

// Let and Const
function main() {
    let r = readLine()
    const PI = Math.PI
    // Print the area of the circle:
    let area = PI * r * r
    console.log(area)
    // Print the perimeter of the circle:
    let perimeter = 2 * (PI * r)
    console.log(perimeter)
}