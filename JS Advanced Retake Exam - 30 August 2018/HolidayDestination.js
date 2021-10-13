function addDestination() {
    const city = document.getElementsByClassName('inputData')[0];
    const country = document.getElementsByClassName('inputData')[1];
    const season = document.getElementById('seasons');
    const springSum = document.getElementById('spring');
    const summerSum = document.getElementById('summer');
    const autumnSum = document.getElementById('autumn');
    const winterSum = document.getElementById('winter');
    const destinationsList = document.getElementById('destinationsList');
    if (city.value.length == 0 || country.value.length == 0) return;

    const seasonRepr = season.value.charAt(0).toUpperCase() + season.value.slice(1);
    const tr = document.createElement('tr');
    const tdCityCountry = document.createElement('td');
    const tdSeason = document.createElement('td');

    tdCityCountry.textContent = `${city.value}, ${country.value}`;
    tdSeason.textContent = seasonRepr;
    console.log(seasonRepr)

    tr.appendChild(tdCityCountry);
    tr.appendChild(tdSeason);
    destinationsList.appendChild(tr);

    switch(seasonRepr) {
        case 'Spring': springSum.value = Number(springSum.value) + 1; break;
        case 'Summer': summerSum.value = Number(summerSum.value) + 1; break;
        case 'Autumn': autumnSum.value = Number(autumnSum.value) + 1; break;
        case 'Winter': winterSum.value = Number(winterSum.value) + 1; break;
    }

    city.value = '';
    country.value = '';
}