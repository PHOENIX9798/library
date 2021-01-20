const express =
  require('express'),
  app = express(),
  fs = require('fs'),
  config = require('./config'),
  utils = require('./lib/utils');

const bodyParser = require('body-parser');

app.listen(config.port, _ => {
  console.log(`服务器已打开, 可以运行 http://localhost:${config.port}`);
})

//在处理请求之前：中间件
app.use(bodyParser.urlencoded({
  extended: false,
}));

app.use(bodyParser.json());

app.use((req, res, next) => {
  req.$USER = JSON.parse(fs.readFileSync('./mock/user.json'));
  req.$BOOKS = JSON.parse(fs.readFileSync('./mock/books.json'));
  req.$PIC = JSON.parse(fs.readFileSync('./mock/pic.json'));
  next();
});

//api处理
app.get('/api/bookList', (req, res) => {
  let { page = 1, limit = 10, searchValue } = req.query;
  page = parseInt(page);
  limit = parseInt(limit);
  let total =
    req.$BOOKS.length,
    pages = Math.ceil(total / limit),
    data = [];
  if (searchValue === '') {
    for (let i = (page - 1) * limit; i < limit * page; i++) {
      let item = req.$BOOKS[i];
      if (!item) {
        break;
      }
      data.push(item);
    }
  } else {
    data = req.$BOOKS.filter(item => item.bookName.indexOf(searchValue) >= 0);
    if (data.length === 0) {
      data = req.$BOOKS.filter(item => item.author.indexOf(searchValue) >= 0);
      if (data.length === 0) {
        data = req.$BOOKS.filter(item => item.publish.indexOf(searchValue) >= 0);
      }
    }
  }
  utils.responseInfo(res, { page, limit, pages, total, data });
})

app.get('/api/picList', (req, res) => {
  const { $PIC: data } = req;
  utils.responseInfo(res, { data });
})

app.get('/api/userList', (req, res) => {
  const { $USER: data } = req;
  utils.responseInfo(res, { data });
})

app.get('/api/myBooks', (req, res) => {
  let { $USER: tmpUser, $BOOKS: tmpBooks } = req;
  let { userId } = req.query;
  let books = tmpUser.find(item => { return item.userId === userId }).books;
  let data = [];
  books.forEach(bId => {
    tmpBooks.forEach(item => {
      if (bId === item.bookId) {
        data.push(item);
      }
      return;
    })
  })
  utils.responseInfo(res, { data });
})

app.post('/api/add', (req, res) => {
  let { userId, college = '', profession = '', grade = '' } = req.body;
  req.DATA.push({
    id: req.DATA.length === 0 ? 1 : parseInt(req.DATA[req.DATA.length - 1]['id'] + 1), userId, college, profession, grade
  });
  fs.writeFileSync('./mock/user.json', req.DATA);
  res.end(JSON.stringify({
    code: 0,
    codeText: 'OK!!',
  }));

})

app.post('/api/login', (req, res) => {
  const { userId, password } = req.body;
  let userData = req.$USER.find(item => {
    return (item.userId === userId && item.password === password)
  });
  if (!userData) {
    userData = { msg: '用户或密码错误' };
  }
  utils.responseInfo(res, { userData });
})

app.post('/api/takeBook', (req, res) => {
  const { userId, bookId } = req.body;
  const tmp = req.$USER;
  let isTake = false;
  tmp.forEach(item => {
    if (item.userId === userId) {
      if (item.books.indexOf(bookId) > -1) {
        isTake = true;
      } else {
        item.books.push(bookId)
      }
    }
  })
  fs.writeFileSync('./mock/user.json', JSON.stringify(tmp));
  if (isTake) {
    utils.responseInfo(res, { msg: "这本书您已经借阅过了哦～" });
  } else {
    utils.responseInfo(res, {});
  }

})

app.post('/api/backBook', (req, res) => {
  const { userId, bookId } = req.body;
  const tmp = req.$USER;
  tmp.forEach(item => {
    if (item.userId === userId) {
      item.books = item.books.filter(item => item !== bookId);
    }
  })
  fs.writeFileSync('./mock/user.json', JSON.stringify(tmp));
  utils.responseInfo(res, {});
})

//处理静态资源
app.use(express.static('./static'));
app.use((req, res) => {
  res.status(404).send({
    code: 1,
    codeText: 'not found~'
  })
})