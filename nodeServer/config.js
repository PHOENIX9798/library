module.exports = {
  port:3333,
  session:{
    secret: 'xiuxiu',
    saveUnitialized: false,
    resave:false,
    cookie: {
      maxAge: 1000*60*60*24*30//30tian
    }
  },
  cors: {
     origin: 'http://127.0.0.1:3000',
     credentials: true,
     headers: 'Content-Type,Content-Length,Authorization,Accept,X-Requested-with',
     methods: 'PUT,POST,GET,DELETE,OPTIONS,HEAD'
  }
}