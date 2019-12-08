const express = require('express');
const app = express();
app.use(express.static('static'));
app.get('/', (req, res) => {
    res.render('main.html');
})
app.listen(3000);
console.log("Server running on port 3000\nlocalhost:3000");