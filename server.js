const express = require('express');
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname+"/src/static/")));
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname+"/src/static/index.html"));
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})