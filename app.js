const app = require('express')();


app.use(express.static('public'))

app.listen("8080", function() {
    console.log("Server is up at 8080");
});