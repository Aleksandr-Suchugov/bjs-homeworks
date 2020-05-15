function getAnimalSound(animal) {
    let sound;
    if (animal) {
        sound = animal.sound;
    } 
    else {
        sound = null;
    }
    animalSound = sound;
    return animalSound;
}

function getAverageMark(marks) {
    let averageMark = 0;
    if (marks.length > 0) {
        let sum = 0;
        for (let i = 0; i < marks.length; i++) {
            sum = sum + marks[i];
        }
        averageMark = Math.round(sum / marks.length);
        return averageMark;
    }
    return averageMark;
}

function checkBirthday(birthday) {
    const now = Date.now();
    const diff = (now - Number(birthday)) / (365.25 * 24 * 60 * 60 * 1000);
    let verdict = false;
    if (diff > 17)
        verdict = true;
    return verdict
}