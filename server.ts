const {staticFile} = require('./src/static/static.ts');
const express = require('express');
const app = express();

app.use(staticFile);
app.listen(8000, () => {
   console.log('server is listening on port 8000');
});


