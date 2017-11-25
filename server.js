const express = require('express');
const fs = require('fs');

const app = express();

const server = app.listen(3000, () => {
  console.log('...')
});

const affin111File = fs.readFileSync('affin111.json');
const dataFile = fs.readFileSync('data.json');

const affin = JSON.parse(affin111File);
const words = JSON.parse(dataFile);


app.get('/add/:word/:score', (request, response) => {
  const word = request.params.word;
  const score = Number(request.params.score);
  words[word] = score;
  const data = JSON.stringify(words)
  fs.writeFile('data.json', data, (x)=>{
    console.log('Start with Writing file');
    const reply = "Thank you for word";    response.send(reply);
    console.log('End with Writing file');
  })
  
})

app.get('/all', (req, res) => {
  const all = {
    data: words,
    affin: affin
  }
  res.send(all);
})