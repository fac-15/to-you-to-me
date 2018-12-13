const { readFile } = require('fs');
const path = require('path');
const qs = require('qs');
const jwt = require('jsonwebtoken');
const http = require('http');

const getData = require('./queries/getdata.js');
const postData = require('./queries/postdata.js');

const serverError = (err, res) => {
  res.writeHead(500, {'Content-Type':'text/html'});
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

const publicHandler = (url, res) => {
  const filepath = path.join(__dirname, "..", url);
  // console.log('im working')
  readFile(filepath, (err, file) => {
    if (err) return serverError(err, res);
    const [extension] = url.split(".")[1];
    const extensionType = {
      html: "text/html",
      css: "text/css",
      js: "application/javascript",
      ico: "image/x-icon"
    };
    response.writeHead(200, { "Content-Type": extensionType[extension] });
    response.end(file);
  });
};

const registerHandler = (req, res) => {
  // console.log("hey, we're about to register!");
  let data = "";
  request.on("data", chunk => {
    data += chunk;
  });
  request.on("end", () => {
    const { name, userName, email, pass } = qs.parse(data);
    postNewUser(name, userName, email, pass, err => {
      if (err) return serverError(err, response);
      res.writeHead(302, { Location: "/login" });
      res.end();

    });
  });
};

const loginHandler = (req, res) => {
  let postData = "";
  request.on("data", chunk => {
    postData += chunk;
  });
  request.on("end", () => {
    const { username, pass } = qs.parse(postData);

    postData(username, pass, err => {
      if (err) {
        return serverError(err, response);
      } else {
        jwt.sign({logged_in: true}, process.env.JWT_SECRET, {}, (err, token) => {
          res.writeHead(302,
            { Location: "/",
            'Set-Cookie': `data=${token}; HttpOnly, Max-Age=9000`
          });
          res.end();
        })
      }
    });
  });
}

const logoutHandler = (req, res) => {
  res.writeHead(302,
    {
      'Content-Type': 'text/html',
       Location: '/',
      'Set-Cookie': 'data=0; HttpOnly; Max-Age=0'
    });
    res.end();
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
  registerHandler,
  loginHandler,
  logoutHandler,
  hobbyHandler
};
