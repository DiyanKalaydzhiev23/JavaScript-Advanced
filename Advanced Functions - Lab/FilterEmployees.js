function filterEmployees(data, criteria) {
  let index = 0;
    criteria = criteria.split('-');
    data = JSON.parse(data);

    if (criteria[0] != 'all') {
        data = data.filter(emp => emp[criteria[0]] == criteria[1]);
    }

    data.forEach(e => { 
        console.log(`${index}. ${e.first_name} ${e.last_name} - ${e.email}`);
        index++;
      });
}


// filterEmployees(`[{
//     "id": "1",
//     "first_name": "Ardine",
//     "last_name": "Bassam",
//     "email": "abassam0@cnn.com",
//     "gender": "Female"
//   }, {
//     "id": "2",
//     "first_name": "Kizzee",
//     "last_name": "Jost",
//     "email": "kjost1@forbes.com",
//     "gender": "Female"
//   },  
// {
//     "id": "3",
//     "first_name": "Evanne",
//     "last_name": "Maldin",
//     "email": "emaldin2@hostgator.com",
//     "gender": "Male"
//   }]`, 
// 'gender-Female');

// filterEmployees(`[{
//     "id": "1",
//     "first_name": "Ardine",
//     "last_name": "Bassam",
//     "email": "abassam0@cnn.com",
//     "gender": "Female"
//   }, {
//     "id": "2",
//     "first_name": "Kizzee",
//     "last_name": "Jost",
//     "email": "kjost1@forbes.com",
//     "gender": "Female"
//   },  
// {
//     "id": "3",
//     "first_name": "Evanne",
//     "last_name": "Maldin",
//     "email": "emaldin2@hostgator.com",
//     "gender": "Male"
//   }]`, 
// 'all');

filterEmployees(`[
    {"id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"},
    {"id": "2","first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "null",
    "gender": "Female"},
    {"id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "null",
    "gender": "Male"}, 
    {"id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"}]`,
    'gender-Female');
