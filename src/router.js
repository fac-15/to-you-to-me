const bcrypt = require('bcryptjs');

const {
  homeHandler,
  getUsersHandler,
  publicHandler,
  postUserHandler,
  errorHandler
} = require('./handlers');

const router = (req, res) => {
  const reqMethod = req.method;
  const reqUrl = req.url;
  const { url } = req;

  if (url === '/') {
    homeHandler(res);
  } else if (url.includes('public')) {
    publicHandler(url, res);
  } else if (url === '/login') {
    loginHandler(reqMethod, reqUrl);
  } else if (url === '/logout') {
    logoutHandler(reqMethod, reqUrl);
  } else if (url === '/register') {
    registerHandler(req, res);
  } else if (url.includes('/hobby')) {
    hobbyHandler(req, res);
  }
};

module.exports = router;
