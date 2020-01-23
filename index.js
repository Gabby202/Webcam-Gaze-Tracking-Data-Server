const express = require('express')
const app = express()
var fs = require("fs");

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());
app.listen(8080, () => console.log('listening on port 8080!'));
// fs.writeFile("./sample.txt", "hi", (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     };
//     console.log("File has been created");
// });

// POST method route
app.post('/store', function (req, res) {
  res.send('POST request to the homepage');
  console.log(JSON.stringify(req.body));
  fs.writeFile("./res.json", JSON.stringify(req.body), (err) => {
     if (err) {
         console.error(err);
         return;
     };
     console.log("File has been created");
 });
})

app.get('/fetchData', function(req, res) {
	res.send(fs.readFileSync('./res.json'));
});