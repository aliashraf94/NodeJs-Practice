const { application } = require("express");
const express = require("express")
const app = express()


// the first basic endpoint
app.get("/", (request, response) => {
    response.send("App is alive and running");
});


// STEP 1 make endpoints using Query Params
// the end point which takes two number and do addition of two numbers.
app.get("/add", (request, response) => {
    let num1 = parseInt(request.query.num1)
    let num2 = parseInt(request.query.num2)
    let sum = num1 + num2
    response.send(`The sum of both num is ${sum}`)
});

// the end point which takes two number and do multiplication.
app.get("/multiply" , (request, response) => {
    let num1 = parseInt(request.query.num1)
    let num2 = parseInt(request.query.num2)
    let multiply = num1 * num2
    response.send(`The multiply of you your numbers is ${multiply}`)
})


// the end point which takes two number and do division.
app.get("/divide" , (request, response) => {
    let num1 = parseInt(request.query.num1)
    let num2 = parseInt(request.query.num2)
    let multiply = num1 / num2
    response.send(`The multiply of you your numbers is ${multiply}`)
})

// the end point which takes two number and do subtraction.
app.get("/subtract" , (request, response) => {
    let num1 = parseInt(request.query.num1)
    let num2 = parseInt(request.query.num2)
    let multiply = num1 - num2
    response.send(`The multiply of you your numbers is ${multiply}`)
})




// Making endpoints using End Point Params
app.get("/addWithParams/:value1/:value2" , (request, response) => {
    let num1 = parseInt(request.params.value1)
    let num2 = parseInt(request.params.value2)
    let multiply = num1 + num2
    response.send(`The sum of you your numbers is ${multiply}`)
})




app.listen(4000, () => console.log("Serever is up and runing"));