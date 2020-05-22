//task #1

class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
    }

    takeDamage(damage) {
        this._durability = this.durability;
        this.durability = this._durability - damage;
        if (this.durability < 0) {
            this.durability = 0;
        }
        
        return this.durability;
    }

    getDamage() {
        this._attack = this.attack;
        if (this.durability < (0.3 * this._durability)) {
            this.attack = 0.5 * this._attack;
        }
        if (this.durability === 0) {
            this.attack = 0;
        }
        delete this._durability;
        delete this._attack;
        return this.attack;
    }

    isBroken() {
        return this.durability > 0 ? false : true; 
    }

}

const arm = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const staff = new Weapon('Посох', 8, 300, 2);

const longBow = new Weapon('Длинный лук', 15, 200, 4);
const axe = new Weapon('Секира', 27, 800, 1); 
const stormStaff = new Weapon('Посох Бури', 10, 300, 3);

//task #2

//основные классы обычного оружия 

class Arm extends Weapon {
    constructor(name, attack, durability, range) {
        super(name, attack, durability, range)
        this.name = 'Рука';
        this.attack = 1;
        this.durability = Infinity;
        this.range = 1;
    }
}

class Bow extends Weapon {
    constructor(name, attack, durability, range) {
        super(name, attack, durability, range)
        this.name = 'Лук';
        this.attack = 10;
        this.durability = 200;
        this.range = 3;
    }
}

class Sword extends Weapon {
    constructor(name, attack, durability, range) {
        super(name, attack, durability, range)
        this.name = 'Меч';
        this.attack = 25;
        this.durability = 500;
        this.range = 1;
    }
}

class Knife extends Weapon {
    constructor(name, attack, durability, range) {
        super(name, attack, durability, range)
        this.name = 'Нож';
        this.attack = 5;
        this.durability = 300;
        this.range = 1;
    }
}

class Staff extends Weapon {
    constructor(name, attack, durability, range) {
        super(name, attack, durability, range)
        this.name = 'Посох';
        this.attack = 8;
        this.durability = 300;
        this.range = 2;
    }
}

//усиленные подклассы оружия

class LongBow extends Bow {
    constructor(name, attack, durability, range) {
        super(name, attack, durability, range)
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }
}

class Axe extends Sword {
    constructor(name, attack, durability, range) {
        super(name, attack, durability, range)
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
    }
}

class StormStaff extends Staff {
    constructor(name, attack, durability, range) {
        super(name, attack, durability, range)
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }
}

//task #3

class StudentLog {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    
    getName() {
        return console.log(`${this.name} ${this.surname}`);
    }
    
    addGrade(grade, subject) {
        if ((grade < 1) || (grade > 5) || (typeof grade !== "number")) {
            console.log(`Вы пытались поставить оценку "${grade!}" по предмету "${subject}". Допускаются только числа от 1 до 5.`)
        }
        
    }   
}