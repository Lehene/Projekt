const express = require("express")
const app = express ()
const path = require ("path")
const port = process.env.PORT || 3000

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req,res) => {
	console.log("Första sidan på projektet")
	res.render("index")
})

app.listen(port, (req, res) => {
	console.log("App fungerar! ladda adress localhost:3000" )
})