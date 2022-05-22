const fs = require('fs')

exports.getItemsFromFile = (path, callbackFn) => {
    fs.readFile(path, (err, fileContent) => {
      if (err) {
        callbackFn([]);
      } else {
        callbackFn(JSON.parse(fileContent));
      }
    });
  };