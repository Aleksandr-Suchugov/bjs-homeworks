// task #1

function parseCount(value) {
    const digitValue = Number.parseInt(value, 10);
    if ((digitValue === NaN) || (digitValue === undefined) || (digitValue === null)) {
        throw 'Невалидное значение';
    }
    return digitValue;
}

function validateCount(value) {
    try {
        return parseCount(value);
    }
    catch(err) {
        console.warn(err);
    }
}

// task #2

class Triangle {
    constructor(a, b, c) {
        this.leftSide = a;
        this.rightSide = b;
        this.basicSide = c;
    }

    [triangleValidityTest]() {
        if ((this.leftSide + this.rightSide) < this.basicSide) {
        throw 'Треугольник с такими сторонами не существует';
        }
    }  
    
    getPerimeter() {
        return this.leftSide + this.rightSide + this.basicSide;
    }

    getArea() {
        return Math.sqrt(0.5 * this.getPerimeter() * (0.5 * this.getPerimeter() - this.leftSide) * (0.5 * this.getPerimeter() - this.rightSide) * (0.5 * this.getPerimeter() - this.basicSide)).toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);   
    }
    catch(err) {
        console.warn("Ошибка! Треугольник не существует");
    }
}