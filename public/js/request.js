function requestData(method, url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      cb(response);
      console.log("TYTM response:", response);
    } else {
      cb("error");
    }
  };
  xhr.open(method, url, true);
  xhr.send();
}
