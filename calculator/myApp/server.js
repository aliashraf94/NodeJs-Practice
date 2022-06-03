const { application } = require("express");
const express = require("express")
const app = express()

app.get("/", (request, response) => {
    response.send("Hello world");
});

app.get("/add", (request, response) => {
    let num1 = parseInt(request.query.num1)
    let num2 = parseInt(request.query.num2)
    let sum = num1 + num2
    response.send(`The sum of both num is ${sum}`)
});


app.get("/multiply" , (request, response) => {
    let num1 = parseInt(request.query.num1)
    let num2 = parseInt(request.query.num2)
    let multiply = num1 * num2
    response.send(`The multiply of you your numbers is ${multiply}`)
})


app.get("/divide" , (request, response) => {
    let num1 = parseInt(request.query.num1)
    let num2 = parseInt(request.query.num2)
    let multiply = num1 / num2
    response.send(`The multiply of you your numbers is ${multiply}`)
})


app.get("/subtract" , (request, response) => {
    let num1 = parseInt(request.query.num1)
    let num2 = parseInt(request.query.num2)
    let multiply = num1 - num2
    response.send(`The multiply of you your numbers is ${multiply}`)
})



app.listen(4000, () => console.log("Serever is up and runing"));