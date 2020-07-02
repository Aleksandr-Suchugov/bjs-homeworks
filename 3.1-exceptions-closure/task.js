// task #1

function parseCount(value) {
    if (Number.parseInt(value, 10)) {
        return Number.parseInt(value, 10);
    }
    throw new Error("Невалидное значение");
}

function validateCount(value) {
    try {
        return parseCount(value);
    }
    catch(err) {
        return err;
    }
}

// task #2

class Triangle {
    constructor(a, b, c) {
        this.leftSide = a;
        this.rightSide = b;
        this.basicSide = c;
    }
    
    getPerimeter() {
        return this.leftSide + this.rightSide + this.basicSide;
    }

    getArea() {
        const halfPerimeter = 0.5 * this.getPerimeter();
        return parseFloat(Math.sqrt(halfPerimeter * (halfPerimeter - this.leftSide) * (halfPerimeter - this.rightSide) * (halfPerimeter - this.basicSide)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        if (((a + b) < c) && ((a + c) < b) && ((c + b) < a)) {
            throw 'Треугольник с такими сторонами не существует';
            }
        const varifiedTriangle = new Triangle(a, b, c);
        return varifiedTriangle;   
    }
    catch(err) {
        varifiedTriangle.getArea() = "Ошибка! Неправильный треугольник";
        varifiedTriangle.getPerimeter() = "Ошибка! Неправильный треугольник";
        return varifiedTriangle;
    }
}