function createAssemblyLine() {

    return {
        hasClima: (car) => {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = () => {
                if (car.temp < car.tempSettings) {
                    car.temp++;
                } else if (car.temp > car.tempSettings) {
                    car.temp--;
                }
            }
        }, 
        hasAudio: (car) => {
            car.currentTrack = {name: '', artist: ''};
            car.nowPlaying = () => {
                if (car.currentTrack !== null) {
                    console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
                }
            }
        },
        hasParktronic: (car) => {
            car.checkDistance = (number) => {
                let result = '';
                if (number < 0.1) {
                    result = 'Beep! Beep! Beep!';
                } else if (0.1 <= number < 0.25) {
                    result = 'Beep! Beep!';
                } else if (0.25 <= number < 0.5) {
                    result = 'Beep!';
                }
                return result;
            }
        }}
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
