const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.port || 5000;

const courseId = require("./data/course.json")


    
app.get("/", (req, res) => {
	res.send("Server Is Running");
});


app.get("/course", (req, res) => {
	res.send(courseId);
}); 




app.listen(Port, () => {
	console.log("Server is Running On Webite", Port);
});
