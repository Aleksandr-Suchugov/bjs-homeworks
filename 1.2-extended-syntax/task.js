function getResult(a,b,c){
    `use strict`
    let equationResult = [];
    if (a === 0) {
        equationResult[0] = `Это уровнение линейное. У него один корень.`;
        equationResult[1] = -c / b;
    }
    let discreminant = Math.pow(b, 2) - 4 * a * c;
    if (discreminant > 0) {
        equationResult[0] = (( -b - Math.sqrt(discreminant)) / (2 * a)).toFixed(3);
        equationResult[1] = (( -b + Math.sqrt(discreminant)) / (2 * a)).toFixed(3);
    }
    else if (discreminant === 0) {
        equationResult[0] = 'Дискрименант равен нулю - уравнение имеет один корень.'
        equationResult[1] = -b / (2 * a);
    }
    else {
        equationResult[0] = 'Дискрименант меньше нуля - уравнение не имеет кореней.'
        
    }
    return equationResult;
}

function getAverageMark(marks){
    let averageMark = [];
    let sum = 0;
    let countMarks = 5;
    if (marks.length > 5) {
        averageMark[0] = `Вы ввели больше пяти оценок. Средний бал будет вычислен только для первых пяти из введеных.`;
    }
    else {
        averageMark[0] = `Средний бал вычислен введеных оценок.`;
        countMarks = marks.length;
    }
    for (i = 0; i < countMarks; i++) {
        sum = sum + marks[i];
    }
    averageMark[1] = sum / countMarks;
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let actualYear = new Date();
    let adultFlag = actualYear.getFullYear() - dateOfBirthday.getFullYear();
    result = (adultFlag >= 18) ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    return result;
}