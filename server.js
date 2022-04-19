const express = require("express");
const bodyParser=require("body-parser")
const ejs=require("ejs")
const https = require("https");
const app = express()
const port = 3000;

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: true}))

app.use("/", require("./routes/index.js"))
app.use("/about", require("./routes/about.js"))
app.use("/products", require("./routes/products.js"))
app.use("/login", require("./routes/login.js"))
app.use("/signup", require("./routes/signup.js"))

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);