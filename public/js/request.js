const requestData = (method, url, cb) => {
  console.log('request made!');
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    console.log('in xhr onreadystatechange');
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log('sate 4 and status 200');
      let response = JSON.parse(xhr.responseText);
      console.log('This is the getHobbies response: ', response);
      cb(response);
      console.log('TYTM response:', response);
    } else {
      cb('error');
    }
  };
  xhr.open(method, url, true);
  xhr.send();
};
