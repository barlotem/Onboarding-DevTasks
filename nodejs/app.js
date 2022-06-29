const fs = require('fs');
try {
  let objData = JSON.parse(fs.readFileSync('data.json'));
  objData.forEach(element => {
    console.log(`App: ${element.name}, Users: ${element.users.length}`);
  });
} catch (error) {
  console.error('There was an error while reading from file', error)
}