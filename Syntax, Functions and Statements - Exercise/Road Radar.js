function radar(speed, road) {
    let restrictedSpeed;

    switch (road) {
        case 'motorway': restrictedSpeed = 130; break;
        case 'interstate': restrictedSpeed = 90; break;
        case 'city': restrictedSpeed = 50; break;
        case 'residential': restrictedSpeed = 20; break;
    }

    if (speed > restrictedSpeed) {
        let diff = speed - restrictedSpeed;
        let stat;

        if (diff <= 20) {
            stat = 'speeding';
        } else if (diff <= 40) {
            stat = 'excessive speeding';
        } else {
            stat = 'reckless driving';
        }

        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${restrictedSpeed} - ${stat}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${restrictedSpeed} zone`);
    }

}

radar(21, 'residential');
