const bcrypt = require('bcryptjs');

const handler = require("./handlers");

const requestMethod = req.method;
const requestUrl = req.url;

const router = (req, res) => {
  const { url } = req;

  if (url === '/') {
    homeHandler(res);
  } else if(url.includes('public')){
    publicHandler(url, res)
  } else if (url === '/login') {
    loginHandler(req, res);
  } else if (url === '/logout') {
    logoutHandler(req, res)
  } else if (url === '/register') {
    registerHandler(req, res)
  } else if (url.includes('/hobby') {
    hobbyHandler(req, res)
  })
}

module.exports = router;
