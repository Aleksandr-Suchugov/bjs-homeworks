`use strict`

function getResult(a,b,c){
    let equationResult = [];
    if (a === 0) {
        equationResult[0] = -c / b;
        return equationResult;
    }
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    if (discriminant > 0) {
        equationResult[0] = parseInt((( -b + Math.sqrt(discriminant)) / (2 * a)).toFixed(0));
        equationResult[1] = parseInt((( -b - Math.sqrt(discriminant)) / (2 * a)).toFixed(0));
    }
    else if (discriminant === 0) {
        equationResult[0] = -b / (2 * a);
    }
    return equationResult;
}

function getAverageMark(marks){
    let averageMark = 0;
    if (marks.length > 0) {
        let sum = 0;
        let countMarks = 5;
        if (marks.length < 5) {
            countMarks = marks.length;
        }
        for (i = 0; i < countMarks; i++) {
            sum = sum + marks[i];
        }
        averageMark = sum / countMarks;
        return averageMark;
    }
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let adultFlag = new Date().getFullYear() - dateOfBirthday.getFullYear();
    result = (adultFlag >= 18) ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    return result;
}
