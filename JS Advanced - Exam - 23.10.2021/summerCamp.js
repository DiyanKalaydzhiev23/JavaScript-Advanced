class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (this.priceForTheCamp.hasOwnProperty(condition) === false) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        for (let k of this.listOfParticipants) {
            if (k.name == name) {
                return `The ${name} is already registered at the camp.`;
            }
        }

        if (money < this.priceForTheCamp[condition]) {
            return 'The money is not enough to pay the stay at the camp.';
        }

        this.listOfParticipants.push({name, condition, power: 100, wins: 0});
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        for (let i = 0; i < this.listOfParticipants.length; i++) {
            let k = this.listOfParticipants[i];
            if (k.name == name) {
                this.listOfParticipants.splice(i, 1);
                return `The ${name} removed successfully.`;
            }
        }

        throw new Error(`The ${name} is not registered in the camp.`);
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let firstExists = false;
        let secondExists = false;
        let firstData;
        let secondData;
            
        for (let k of this.listOfParticipants) {
            if (k.name == participant1) {
                firstExists = true;
                firstData = k;
            } 
            if (k.name == participant2) {
                secondExists = true;
                secondData = k;
            }
        }

        if (typeOfGame === 'WaterBalloonFights') {
            if (firstExists == false || secondExists == false) {
                throw new Error('Invalid entered name/s.');
            }

            if (firstData.condition !== secondData.condition) {
                throw new Error('Choose players with equal condition.');
            }
            
            if (firstData.power > secondData.power) {
                firstData.wins += 1;
                return `The ${participant1} is winner in the game ${typeOfGame}.`;
            } else if (secondData.power > firstData.power) {
                secondData.wins += 1;
                return `The ${participant2} is winner in the game ${typeOfGame}.`;
            } else {
                return 'There is no winner.';
            }


        } else if (typeOfGame === 'Battleship') {
            if (firstExists == false) {
                throw new Error('Invalid entered name/s.');
            }

            firstData.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        }

        for (let i = 0; i < this.listOfParticipants.length; i++) {
            let k = this.listOfParticipants[i];
            if (k.name == participant1) {
                this.listOfParticipants[i] = firstData;
            } 
            if (k.name == participant2) {
                this.listOfParticipants[i] = secondData;
            }
        }
    }

    toString() {
        const result = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];
        const sorted = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        
        sorted.forEach(k => {
            result.push(`${k.name} - ${k.condition} - ${k.power} - ${k.wins}`);
        });

        return result.join('\n');
    }
}

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));
// console.log(summerCamp.unregisterParticipant("Petar"));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
