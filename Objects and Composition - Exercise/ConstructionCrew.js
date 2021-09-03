function hydrate(worker) {
    if (worker['dizziness'] == true) {
        let neededWater = 0.1 * worker['weight'] * worker['experience'];
        worker['levelOfHydrated'] += neededWater;
        worker['dizziness'] = false;
    }
    return worker;
}

console.log(hydrate({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }));
