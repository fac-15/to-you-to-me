const getHobbies = (response) => {
  console.log('getting hobbies!');
  console.log('response= ', response);
  let hobbiesContainer = document.getElementById('hobbies');
  response.forEach((hobby) => {
    console.log('This is the getHobbies response: ', response);

    //DOM Elements
    const hobbyEntry = document.createElement('li');
    hobbyEntry.setAttribute("class", "hobbie_item");

    const hobbyLoc = document.createElement('p');
    hobbyLoc.setAttribute("class", "hobbie_loc");

    const hobbyName = hobby.hobbie_name;
    const hobbyLocation = hobby.location;

    hobbyEntry.textContent = hobbyName;
    hobbiesContainer.appendChild(hobbyEntry);

    hobbyLoc.textContent = hobbyLocation;
    hobbyEntry.appendChild(hobbyLoc);
  });
};

(() => {
  requestData("GET", "/hobbies", getHobbies);
})();
