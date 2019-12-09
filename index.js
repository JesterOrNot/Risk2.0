const express = require('express');
const path = require("path")
const app = express();
app.use(express.static('/static'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/static/main.html");
})
app.listen(3000);
console.log("Server running on port 3000\nlocalhost:3000");