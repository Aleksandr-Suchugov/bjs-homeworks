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
        if (((this.leftSide + this.rightSide) < this.basicSide) || ((this.leftSide + this.basicSide) < this.rightSide) || ((this.rightSide + this.basicSide) < this.leftSide)) {
        throw 'Треугольник с такими сторонами не существует';
        }
    }  
    
    getPerimeter() {
        return this.leftSide + this.rightSide + this.basicSide;
    }

    getArea() {
        return (0.25 * Math.sqrt(4 * Math.pow(this.leftSide, 2) * Math.pow(this.rightSide, 2) - Math.pow(Math.pow(this.leftSide, 2) + Math.pow(this.rightSide, 2) - Math.pow(this.basicSide, 2), 2))).toFixed(3);
    }
}

getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);   
    }
    catch(err) {
        console.warn("Ошибка! Треугольник не существует");
    }
}