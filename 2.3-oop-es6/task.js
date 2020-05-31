//task #1

class Weapon {
    #originDurability;
    #originAttack;
      constructor(weaponObject) {
          this.name = weaponObject.name;
          this.attack = weaponObject.attack;
          this.durability = weaponObject.durability;
          this.range = weaponObject.range;
          this.#originDurability = weaponObject.durability;
          this.#originAttack = weaponObject.attack;
      }
  
      takeDamage(damage) {
          this.durability = this.durability - damage;
          if (this.durability < 0) {
              this.durability = 0;
          }
          return this.durability;
      }
  
      getDamage() {
          if (this.durability < (0.3 * this.#originDurability)) {
              this.attack = 0.5 * this.#originAttack;
          }
          if (this.durability === 0) {
              this.attack = 0;
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
        super('Рука', 1, Infinity, 1)
        this.name = 'Рука';
        this.attack = 1;
        this.durability = Infinity;
        this.range = 1;
    }
}

class Bow extends Weapon {
    constructor() {
        super('Лук', 10, 200, 3)
        this.name = 'Лук';
        this.attack = 10;
        this.durability = 200;
        this.range = 3;
    }
}

class Sword extends Weapon {
    constructor() {
        super('Меч', 25, 500, 1)
        this.name = 'Меч';
        this.attack = 25;
        this.durability = 500;
        this.range = 1;
    }
}

class Knife extends Weapon {
    constructor() {
        super('Нож', 5, 300, 1)
        this.name = 'Нож';
        this.attack = 5;
        this.durability = 300;
        this.range = 1;
    }
}

class Staff extends Weapon {
    constructor() {
        super('Посох', 8, 300, 2)
        this.name = 'Посох';
        this.attack = 8;
        this.durability = 300;
        this.range = 2;
    }
}

//усиленные подклассы оружия

class LongBow extends Bow {
    constructor() {
        super('Длинный лук', 15, 4)
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }
}

class Axe extends Sword {
    constructor() {
        super('Секира', 27, 800)
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
    }
}

class StormStaff extends Staff {
    constructor() {
        super('Посох Бури', 10, 3)
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }
}

//task #3

class StudentLog {
    #journal;
    constructor(fullName) {
        this.fullName = fullName;
        this.#journal = {};
    }
  
    getName() {
        return console.log(this.fullName);
    }
    
    addGrade(grade, subject) {
        this.#journal.subject = []; 
        if ((grade < 1) || (grade > 5) || (typeof grade !== "number")) {
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`)
            return 0;
        }
        this.#journal.subject.push(grade);
        return this.#journal.subject.length;
    }   
    
    getAverageBySubject(subject) {
        let averageMark = 0;
        for (subject in this.#journal) {
            if (this.#journal.subject.length > 0) {
                let sum = 0;
                for (let i = 0; i < this.#journal.subject.length; i++) {
                    sum = sum + this.#journal.subject[i];
                }   
            averageMark = sum / this.#journal.subject.length;
            }
        }
        return averageMark;
    }
    
    getTotalAverage() {
        let allMarks = []
        for (let i = 0; i < Object.keys(this.#journal).length; i++){
            allMarks[i] = this.#journal[Object.keys(this.#journal)[i]];
        }
        averageTotal = getAverageBySubject(allMarks.flat());
        return averageTotal;
    }
}