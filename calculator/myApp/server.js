const express = require("express")
const app = express()

app.get("/", (request, response) => {
    response.send("Hello world");
});

app.get("/add", (request, respone) => {
    let num1 = parseInt(request.query.num1)
    let num2 = parseInt(request.query.num2)
    let sum = num1 + num2
    respone.send(`The sum of both num is ${sum}`)
});

app.listen(4000, () => console.log("Serever is up and runing"));