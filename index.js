const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const db = require('./models');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
app.get("/", (req, res) => res.send("ERP System API Running"));

// const courseRoutes = require("./routes/course.routes");
// app.use("/api/courses", courseRoutes);

app.use("/api/courses", require("./routes/course.routes"));
app.use("/api/semesters", require("./routes/semester.routes"));
app.use("/api/subjects", require("./routes/subject.routes"));
app.use("/api/students", require("./routes/student.routes"));
app.use("/api/faculties", require("./routes/faculty.routes"));
app.use("/api/attendance/student", require("./routes/studentAttendance.routes"));
app.use("/api/attendance/faculty", require("./routes/facultyAttendance.routes"));
app.use("/api/attendance/hod", require("./routes/hodAttendance.routes"));
app.use("/api/auth", require("./routes/auth.routes"));

// Sync DB and start server
const PORT = process.env.PORT || 5000;
db.sequelize.sync({ alter: true }).then(() => {
  console.log("Database synced.");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
