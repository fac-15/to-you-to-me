const { createServer } = require('http');
const router = require('./router');

const server = createServer(router);
const port = process.env.PORT || 6000;

server.listen(port, () => {
  console.log(`To you, to me is running on ${port}`);
});
