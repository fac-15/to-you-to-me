const getHobbies = (response) => {
  console.log('getting hobbies!');
  console.log('response= ', response);
  let hobbiesContainer = document.getElementById('hobbies');
  response.forEach((hobby) => {
    console.log('This is the getHobbies response: ', response);
    const hobbyEntry = document.createElement('div');
    const hobbyName = hobby.hobbie_name;
    hobbyEntry.textContent = hobbyName;
    hobbiesContainer.appendChild(hobbyEntry);
  });
};

(() => {
  requestData('GET', '/hobbies', getHobbies);
})();
