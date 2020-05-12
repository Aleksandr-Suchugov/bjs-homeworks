"use strict"
function calculateTotalMortgage(percent, contribution, amount, date) {
    let loanRate = parseInt(percent) / 100;
    let firstPayment = parseInt(contribution);
    let objectPrice = parseInt(amount);
    let actualDate = new Date();
    let loanParams = {
        rate: loanRate * 100,
        loanAmount: 0,
        monthsCount: 0,
        fullCostOfFunds: 0
    }
    let totalAmount = 0;
    if ((date.getFullYear() >= actualDate.getFullYear()) && (date.getMonth() < 12) && (date.getMonth() >= 0) && (date.getDate() < 32) && (date.getDate() >= 1)) {
        loanParams.loanAmount = objectPrice - firstPayment;
        loanParams.monthsCount = (date.getFullYear() - actualDate.getFullYear()) * 12 + date.getMonth() - actualDate.getMonth();
        let annuityPayment = loanParams.loanAmount * loanRate / 12 * (1 + 1 / (Math.pow(1 + loanRate / 12, loanParams.monthsCount) - 1));
        loanParams.fullCostOfFunds = (annuityPayment * loanParams.monthsCount).toFixed(2);
        
        totalAmount = parseFloat(loanParams.fullCostOfFunds);
    }
    else {
        totalAmount = 'Неверный формат даты. Дату необходимо указать в следующем формате - ДД.ММ.ГГГГ.'
    }
    return totalAmount;
}

function getGreeting(name) {
    let greeting = 0;
    if (name) {
        greeting = `Привет, мир! Меня зовут ${name}`;
    }
    else {
        greeting = `Привет, мир! Меня зовут Аноним`;
    }
    return greeting;
}