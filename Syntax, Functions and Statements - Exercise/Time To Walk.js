function calculateWalk(steps, stepLength, speedKMH) {
    let distance = steps * stepLength;
    let speed = speedKMH * 1000 / 3600;
    let rest = Math.floor(distance / 500) * 60;
    let time = distance / speed + rest;

    let hours = Math.floor(time/3600).toFixed(0).padStart(2, '0');
    let minutes = Math.floor((time - hours * 3600) / 60).toFixed(0).padStart(2, '0');
    let seconds = (time % 60).toFixed(0).padStart(2, '0');
    
    console.log(`${hours}:${minutes}:${seconds}`);

}


calculateWalk(4000, 0.60, 5);
