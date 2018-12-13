const { readFile } = require('fs');
const path = require('path');
const qs = require('qs');
const jwt = require('jsonwebtoken');
const http = require('http');

const getData = require('./queries/getdata.js');
const postData = require('./queries/postdata.js');

const serverError = (err, res) => {
  res.writeHead(500, 'Content-Types':'text/html');
  res.end('<h1>Sorry there was a problem loading..</h1>');
}

const homeHandler = (res) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.js');
  readFile(filePath, (err, file) => {
    if (err) return serverError(err, res);
    res.writeHead(200, { 'Content-Type':'text/html'});
    res.end(file);
  })
}

const publicHandler = (url, res => {
  const filepath = path.join(__dirname, "..", url);
  readFile(filepath, (err, file) => {
    if (err) return serverError(err, res);
    const [extension] = url.split(".")[1];
    const extensionType = {
      html: "text/html",
      css: "text/css",
      js: "application/javascript",
      ico: "image/x-icon"
    };
    response.writeHead(200, { 'Content-Type': extensionType[extension] });
    response.end(file);
  });
};

const loginHandler = (requestMethod, requestUrl) => {
  return readFile('./html/login.html', (err, file) => {
      res.writeHead(302,
        {
          'Content-Type': 'text/html',
          'Content-Length': data.length,
           Location: '/',
          'Set-Cookie': `jwt=${token}; HttpOnly; Max-Age=1000`
        }
      );
      return res.end(file);
    }
  );
}

const logoutHandler = (requestMethod, requestUrl) => {
  return readFile('./html/logout.html', (err, file) => {
      res.writeHead(302,
        {
          'Content-Type': 'text/html',
          'Content-Length': data.length,
           Location: '/',
          'Set-Cookie': `jwt=0; HttpOnly; Max-Age=0`
        }
      );
      return res.end(file);
    }
  );
}

const registerHandler = (req, res) => {
  // console.log("hey, we're about to register!");
  let data = "";
  request.on("data", chunk => {
    data += chunk;
  });
  request.on("end", () => {
    const { uname, fname, email, pass } = qs.parse(data);

    postData(uname, fname, email, pass err => {
      if (err) return serverError(err, response);
      response.writeHead(302, { Location: "/" });
      response.end();
    });
  });
};

const hobbyHandler = (req, res) => {
  // console.log("we're getting HOBBIES!");
  getData((err, res) => {
    if (err) return serverError(err, response);
    let data = JSON.stringify(res);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(data);
  });
};

module.exports = {
  homeHandler,
  publicHandler,
  loginHandler,
  logoutHandler,
  registerHandler,
  hobbyHandler
};
