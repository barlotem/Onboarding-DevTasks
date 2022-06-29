const fs = require('fs');
fs.readFile('input.js', 'utf8', function (err, data) {
  if (err) throw err;
  let objData = JSON.parse(data);

  objData.forEach(element => {
    console.log(`App: ${element.name}, Users: ${element.users.length}`);
  }); 
});