const { readFile } = require('fs');
const path = require('path');
const qs = require('qs');
const jwt = require('jsonwebtoken');
// const http = require('http');
const bcrypt = require('bcryptjs');

const getData = require('./queries/getdata.js');
const postNewUser = require('./queries/postdata.js');


const serverError = (err, res) => {

  res.writeHead(500, { 'Content-Type': 'text/html' });
  res.end('<h1>Sorry there was a problem loading..</h1>');

};

const homeHandler = res => {
  const filePath = path.join(__dirname, "..", "public", "index.html");
  readFile(filePath, (err, file) => {
    if (err) return serverError(err, res);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(file);
  });
};

const publicHandler = (url, res) => {
  const filepath = path.join(__dirname, '..', url);
  console.log('im working');
  readFile(filepath, (err, file) => {
    if (err) return serverError(err, res);
    const extension = url.split('.')[1];
    const extensionType = {
      html: 'text/html',
      css: 'text/css',
      js: 'application/javascript',
      ico: 'image/x-icon'
    };
    res.writeHead(200, { 'Content-Type': extensionType[extension] });
    res.end(file);
  });
};

const registerUserHandler = (req, res) => {
  console.log("this is the body", req.body)
  let data = "";
  req.on("data", chunk => {
    data += chunk;
  });
  req.on('end', () => {
    const { name, userName, email, pass } = qs.parse(data);
    // const passedData = qs.parse(data);
    // console.log("passedData: ", passedData);
    console.log("name: ", name);
    console.log("password: ", pass);
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return err;
      } else {
        bcrypt.hash(pass, 10, (err, hashedPassword) => {
          if (err) {
            return err;
          } else {
            postNewUser(
              name,
              userName,
              email,
              hashedPassword,
              (err, result) => {
                console.log('result: ', result);
                if (err) {
                  res.statusCode = 500;
                  res.end('Error registering');
                  return;
                }
                // console.log('hash: ', hash);
                res.writeHead(302, { Location: '/loginPage' });
                res.end('Successfully registered!');
              }
            );
          }
        });
      }
    });
    // postNewUser(name, userName, email, pass, (err) => {
    //   if (err) return serverError(err, res);
    //   res.writeHead(302, { Location: '/loginPage' });
    //   res.end();
    // });
  });
};

 const registerPageHandler = (req, res) => {
  const filePath = path.join(__dirname, "..", "public", "register.html");
  readFile(filePath, (err, file) => {
    if (err) return serverError(err, res);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(file);
  });
};
const loginPageHandler = (req, res) => {
  console.log("are we being reached");
  const filePath = path.join(__dirname, "..", "public", "login.html");
  readFile(filePath, (err, file) => {
    if (err) return serverError(err, res);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(file);
  });
};
// let postData = "";
// request.on("data", chunk => {
//   postData += chunk;
// });
// request.on("end", () => {
//   const { username, pass } = qs.parse(postData);
//
//   postData(username, pass, err => {
//     if (err) {
//       return serverError(err, res);
//     } else {
//       jwt.sign(
//         { logged_in: true },
//         process.env.JWT_SECRET,
//         {},
//         (err, token) => {
//           res.writeHead(302, {
//             Location: "/",
//             "Set-Cookie": `data=${token}; HttpOnly, Max-Age=9000`
//           });
//           res.end();
//         }
//       );
//     }
//   });
// });
// };
const loginHandler = (method, url) => {
  let postData = '';
  request.on('data', (chunk) => {
    postData += chunk;
  });
  request.on('end', () => {
    const { username, pass } = qs.parse(postData);

    postData(username, pass, (err) => {
      if (err) {
        return serverError(err, response);
      } else {
        jwt.sign(
          { logged_in: true },
          process.env.JWT_SECRET,
          {},
          (err, token) => {
            res.writeHead(302, {
              Location: '/',
              'Set-Cookie': `data=${token}; HttpOnly, Max-Age=9000`
            });
            res.end();
          }
        );
      }
    });
  });
};

const logoutHandler = (method, url) => {
  res.writeHead(302, {
    'Content-Type': 'text/html',
    Location: '/',
    'Set-Cookie': 'data=0; HttpOnly; Max-Age=0'
  });
  res.end();
};

const hobbyHandler = (req, res) => {
  // console.log("we're getting HOBBIES!");
  getData((err, res) => {
    if (err) return serverError(err, res);
    let data = JSON.stringify(res);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  });
};

module.exports = {
  homeHandler,
  publicHandler,
  registerPageHandler,
  registerUserHandler,
  loginPageHandler,
  logoutHandler,
  hobbyHandler
};
