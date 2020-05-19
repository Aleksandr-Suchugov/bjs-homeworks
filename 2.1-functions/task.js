"use strict"

function getSolutions(a,b,c) {
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    let equationResult = {
        D: discriminant,
        roots: []
    } 
    if (a === 0) {
        equationResult.roots[0] = -c / b;
        return equationResult;
    }
    if (discriminant > 0) {
        equationResult.roots[0] = ( -b + Math.sqrt(discriminant)) / (2 * a);
        equationResult.roots[1] = ( -b - Math.sqrt(discriminant)) / (2 * a);
    }
    else if (discriminant === 0) {
        equationResult.roots[0] = -b / (2 * a);
    }
    return equationResult;
}

function showSolutionsMessage( a, b, c ) {
    let result = getSolutions(a,b,c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (a === 0) {
        return console.log(`Уравнение является линейным, - у него один корень: ${result.roots}`);
    }
    if (result.D > 0) {
        return console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
    else if (result.D === 0) {
        return console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    }
    return console.log(`Уравнение не имеет вещественных корней`);
}


function getAverageMark(marks) {
    let averageMark = 0;
    if (marks.length > 0) {
        let sum = 0;
        for (let i = 0; i < marks.length; i++) {
            sum = sum + marks[i];
        }
        averageMark = sum / marks.length;
        return averageMark;
    }
    return averageMark;
}

function getAverageScore(data) {
    let averageForSubject = {};
    for (let subject in data) {
      averageForSubject[subject] = getAverageMark(data[subject]);
    }
    let allMarks = []
    for (let i = 0; i < Object.keys(data).length; i++){
      allMarks[i] = data[Object.keys(data)[i]];
    }
    averageForSubject['average'] = getAverageMark(allMarks.flat());
    return averageForSubject;
}  

function getDecodedValue(secret) {
    let name = "Эмильо";
    if (secret === 0) {
        name = "Родриго";
    }
    return name;
}

function getPersonData(secretData) {
    let decodedInfo = {};
    for (let key in secretData) {
        let newKey;
        switch (key) {
            case 'aaa': 
                newKey = 'firstName';
            break;
            case 'bbb': 
                newKey = 'lastName';
            break;
        } 
        decodedInfo[newKey] = getDecodedValue(secretData[key]);
    }
    return decodedInfo;
}