const local = {
  port: 3000,
  host: '0.0.0.0',
  mongoUrl: 'mongodb://localhost:27017/wxrobot',
  secret: '123456',
  puppet_padplus_token: '',
  tianApiKey: ''
}
const development = {
}
const production = {
  port: 8081,
}
let config = Object.assign(local, development)
if (process.env.NODE_ENV == 'production') {
  config = Object.assign(local, production)
}
module.exports = config