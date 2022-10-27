const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.port || 5000;

const courseId = require("./data/course.json")

const courseInfo = require("./data/coursedetails.json");
    
app.get("/", (req, res) => {
	res.send("Server Is Running");
});


app.get("/course", (req, res) => {
	res.send(courseId);
}); 

app.get("/allCourse", (req, res) => {
	res.send(courseInfo);
}); 


app.get("/course/:id", (req, res) => {
	const id = req.params.id;
	const selectedCourse = courseInfo.find((course) => course._id == id);

	res.send(selectedCourse);
}); 




app.listen(Port, () => {
	console.log("Server is Running On Website", Port);  
});
