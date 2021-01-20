const fs = require('fs'),
  path = require('path');

function readFile(pathname, encodeing = 'utf8') {
  return new Promise((resolve, reject) => {
    pathname = path.resolve(pathname);
    fs.readFile(pathname, encodeing, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    })
  })
}

function writeFile(pathname, data, encodeing = 'utf8') {
  return new Promise((resolve, reject) => {
    if (typeof data !== "string") {
      data = JSON.stringify(data);
    }
    pathname = path.resolve(pathname);
    fs.writeFile(pathname, data, encodeing, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    })
  })
}

module.exports = {
  readFile,writeFile
};
