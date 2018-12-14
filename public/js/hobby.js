const getHobby = (response) => {
  let dateDropDown = document.getElementById('date-select');

  response.forEach(function(hobby) {
    let hobbyEntry = document.createElement('option');
    let newType = hobby.type;
    hobbyEntry.setAttribute('value', hobby.type);
    hobbyEntry.setAttribute('id', hobby.id);

    hobbyEntry.textContent = newType;
    dateDropDown.appendChild(newType);

    // console.log('result', shortDate);
  });
};
requestData('GET', '/hobby', getHobby);

const getLunch = (response) => {
  let dateDropDown = document.getElementById('date-select');

  response.forEach(function(lunch) {
    let dataEntry = document.createElement('option');
    let shortDate = lunch.dates.split('T')[0];
    dataEntry.setAttribute('value', lunch.id);
    dataEntry.setAttribute('id', lunch.id);
    dataEntry.textContent = shortDate;
    dateDropDown.appendChild(dataEntry);

    console.log('result', shortDate);
  });
};
requestData('GET', '/people', getLunch);
