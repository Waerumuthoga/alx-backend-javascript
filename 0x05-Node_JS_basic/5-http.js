const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();

app.on('request', (req, res) => {
  const responseText = 'Hello Holberton School!';
  const dbPath = process.argv[2];   
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;
    res.write(responseText);
    res.end();
  } else if (req.url === '/students') {
    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) {
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 404;
        res.write('This is the list of our students\n');
        res.write('Cannot load the database');
        res.end();
        return;
      }

      const students = [];
      const lines = data.trim().split('\n');
      
      const fieldsArray = lines[0].split(','); // First line contains field names
      for (let i = 1; i < lines.length; i++) { // Start from the second line
        const line = lines[i].trim();
        if (line === '') continue;
        
        const values = line.split(',');
        const student = {};
        for (let j = 0; j < fieldsArray.length; j++) {
          student[fieldsArray[j]] = values[j];
        }
        students.push(student);
      }
    
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 200;
      res.write('This is the list of our students\n');
      
      students.forEach(student => {
        res.write(`Number: ${student.id}\n`);
        res.write(`Name: ${student.firstname} ${student.lastname}\n`);
        if (student.location) {
          res.write(`Location: ${student.location}\n`);
        }
        res.write('\n');
      });

      res.end();
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
