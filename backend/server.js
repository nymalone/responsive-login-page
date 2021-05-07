// server.js
const jsonServer = require('json-server')
const cors = require('cors');
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({ noCors: true })

server.use(jsonServer.bodyParser)
server.use(cors());
server.post('/login', (req, res) => {
  const {
    email,
    password
  } = req.body;

  if (!email || !password) {
    res.status(400).jsonp({
      errorMsg: 'email or password not provided.'
    });
    return;
  }

  if (email != 'joe@doe.com' || password != '1234joe') {
    res.status(400).jsonp({
      errorMsg: 'invalid credentials'
    });
    return;
  }

  res.jsonp({
    msg: 'success. valid credentials.'
  })
})

server.use(middlewares)
server.use('/api', router)
server.listen(8888, () => {
  console.log('JSON Server is running')
})