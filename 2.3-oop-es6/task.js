//task #1

class Weapon {
    constructor(weaponObject) {
        this.name = weaponObject.name;
        this.attack = weaponObject.attack;
        this.durability = weaponObject.durability;
        this.range = weaponObject.range;
        this.durabilityOrigin = weaponObject.durability;
    }

    takeDamage(damage) {
        this.durability = this.durability - damage;
        if (this.durability < 0) {
            this.durability = 0;
        }
        return this.durability;
    }
  
    getDamage() {
        if (this.durability === 0) {
            return 0;
        }
        else if (this.durability < (0.3 * this.durabilityOrigin)) {
            return (0.5 * this.attack);
        } 
        return this.attack;
    }
  
    isBroken() {
        return  this.durability > 0 ? false : true; 
    }
  
}
  
const arm = new Weapon({name: 'Рука', attack: 1, durability: Infinity, range: 1});
const bow = new Weapon({name: 'Лук', attack: 10, durability: 200, range: 3});
const sword = new Weapon({name: 'Меч', attack: 25, durability: 500, range: 1});
const knife = new Weapon({name: 'Нож', attack: 5, durability: 300, range: 1});
const stick = new Weapon({name: 'Посох', attack: 8, durability: 300, range: 2});
  
const longBow = new Weapon({name: 'Длинный лук', attack: 15, durability: 200, range: 4});
const axe = new Weapon({name: 'Секира', attack: 27, durability: 800, range: 1}); 
const stormStick = new Weapon({name: 'Посох Бури', attack: 10, durability: 300, range: 3});

//task #2

//основные классы обычного оружия 

class Arm extends Weapon {
    constructor() {
        super({name: 'Рука', attack: 1, durability: Infinity, range: 1})
    }
}

class Bow extends Weapon {
    constructor() {
        super({name: 'Лук', attack: 10, durability: 200, range: 3})
    }
}

class Sword extends Weapon {
    constructor() {
        super({name: 'Меч', attack: 25, durability: 500, range: 1})
    }
}

class Knife extends Weapon {
    constructor() {
        super({name: 'Нож', attack: 5, durability: 300, range: 1})
    }
}

class Staff extends Weapon {
    constructor() {
        super({name: 'Посох', attack: 8, durability: 300, range: 2})
    }
}

//усиленные подклассы оружия

class LongBow extends Bow {
    constructor() {
        super()
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }
}

class Axe extends Sword {
    constructor() {
        super()
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
    }
}

class StormStaff extends Staff {
    constructor() {
        super()
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }
}

//task #3

class StudentLog {
    #journal;
    constructor(fullName) {
        this.name = fullName;
        this.#journal = {};
    }
  
    getName() {
        return this.name;
    }
    
    addGrade(grade, subject) {
        if ((grade < 1) || (grade > 5) || (typeof grade !== "number")) {
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`)
            return 0;
        }
        if (this.#journal[subject] === undefined) {
            this.#journal[subject] = [];
        }
        (this.#journal[subject]).push(grade);
        return (this.#journal[subject]).length;
    }   
    
    getAverageBySubject(subject) {
        let averageMark = 0;
        if (this.#journal[subject] != undefined) {
            if ((this.#journal[subject]).length > 0) {
                let sum = 0;
                for (let i = 0; i < (this.#journal[subject]).length; i++) {
                    sum = sum + (this.#journal[subject])[i];
                }   
            averageMark = sum / (this.#journal[subject]).length;
            }
        }
        return averageMark;
    }
    
    getTotalAverage() {
        let allMarks = [];
        for (let i = 0; i < Object.keys(this.#journal).length; i++){
            allMarks[i] = this.#journal[Object.keys(this.#journal)[i]];
        }
        let newArray = allMarks.flat();
        let sum = 0;
        for (let i = 0; i < newArray.length; i++) {
            sum = newArray[i] + sum;
        }
        let averageTotal = sum / newArray.length;
        return averageTotal;
    }
}