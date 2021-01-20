function responseInfo(res, options) {
  let config = Object.assign({
    code: 0,
  }, options);
  res.status(200).type('application/json').send(config);
}

function againMD5(text) {
  return text.substring(4,text.length-4).split('').reverse().join('');
}
module.exports = {
  responseInfo,againMD5
}