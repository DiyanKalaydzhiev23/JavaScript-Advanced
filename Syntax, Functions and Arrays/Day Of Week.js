function recognizeDay(day) {
    let numberOfWeek;

    switch (day) {
        case 'Monday': numberOfWeek = 1; break;
        case 'Tuesday': numberOfWeek = 2; break;
        case 'Wednesday': numberOfWeek = 3; break;
        case 'Thursday': numberOfWeek = 4; break;
        case 'Friday': numberOfWeek = 5; break;
        case 'Saturday': numberOfWeek = 6; break;
        case 'Sunday': numberOfWeek = 7; break;
        default: numberOfWeek = 'error'; break;
    }
    console.log(numberOfWeek)
}

recognizeDay('Monda')