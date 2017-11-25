console.log('Server JS File');

const express = require('express');

const app = express();

const server = app.listen(3000, listening);

function listening(){
  
  console.log('...')
}

app.use(express.static('website'));