const getHobbies = (response) => {
  console.log('getting hobbies!');
  console.log('response= ', response);
  let hobbiesContainer = document.getElementById('hobbies');
  response.forEach((hobby) => {
    console.log('This is the getHobbies response: ', response);

    //DOM Elements
    const hobbyEntry = document.createElement('li');
    hobbyEntry.setAttribute("class", "hobbie_item");

    // const hobbyNames = document.createElement('p');
    // hobbyNames.setAttribute("class", "hobbie_name");
    //
    const hobbyLoc = document.createElement('p');
    hobbyLoc.setAttribute("class", "hobbie_loc");
    // const hobbyEntry = document.createElement('div');
    // hobbyEntry.setAttribute("id", "hobbie_item");

    const hobbyName = hobby.hobbie_name;
    const hobbyLocation = hobby.location;
    // const hobbyType = hobby.type;

    hobbyEntry.textContent = hobbyName;
    hobbiesContainer.appendChild(hobbyEntry);

    hobbyLoc.textContent = hobbyLocation;
    hobbyEntry.appendChild(hobbyLoc);
  });
};

(() => {
  requestData('GET', '/hobbies', getHobbies);
})();
