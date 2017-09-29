const express = require("express")
const app = express ()
const path = require ("path")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req,res) => {
	console.log("Första sidan på projektet")
	res.render("index")
})

app.listen(3000, (req, res) => {
	console.log("App fungerar! ladda adress localhost:3000" )
})