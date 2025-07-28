const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("../config/db.config");

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.PORT,
    pool: dbConfig.pool
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.Course = require("./course.model")(sequelize, DataTypes);
db.Semester = require("./semester.model")(sequelize, DataTypes);
db.Subject = require("./subject.model")(sequelize, DataTypes);
db.Faculty = require("./faculty.model")(sequelize, DataTypes);
db.Student = require("./student.model")(sequelize, DataTypes);
db.StudentAttendance = require("./studentAttendance.model")(sequelize, DataTypes);
db.FacultyAttendance = require("./facultyAttendance.model")(sequelize, DataTypes);
db.HODAttendance = require("./hodAttendance.model")(sequelize, DataTypes);

// =====================
// 🔗 Model Relationships
// =====================

// Course → Semester
db.Course.hasMany(db.Semester, { foreignKey: 'CourseID' });
db.Semester.belongsTo(db.Course, { foreignKey: 'CourseID' });

// Course → Faculty
db.Course.hasMany(db.Faculty, { foreignKey: 'CourseID' });
db.Faculty.belongsTo(db.Course, { foreignKey: 'CourseID' });

// Course → Student
db.Course.hasMany(db.Student, { foreignKey: 'CourseID' });
db.Student.belongsTo(db.Course, { foreignKey: 'CourseID' });

// Semester → Faculty & Student
db.Semester.hasMany(db.Faculty, { foreignKey: 'SemesterID' });
db.Faculty.belongsTo(db.Semester, { foreignKey: 'SemesterID' });

db.Semester.hasMany(db.Student, { foreignKey: 'SemesterID' });
db.Student.belongsTo(db.Semester, { foreignKey: 'SemesterID' });

// Course → Subject
db.Course.hasMany(db.Subject, { foreignKey: 'CourseID' });
db.Subject.belongsTo(db.Course, { foreignKey: 'CourseID' });

// Subject → Faculty
db.Faculty.hasMany(db.Subject, { foreignKey: 'FacultyID' });
db.Subject.belongsTo(db.Faculty, { foreignKey: 'FacultyID' });

// Subject → Semester
db.Semester.hasMany(db.Subject, { foreignKey: 'SemesterID' });
db.Subject.belongsTo(db.Semester, { foreignKey: 'SemesterID' });

// Student → StudentAttendance
db.Student.hasMany(db.StudentAttendance, { foreignKey: 'StudentID' });
db.StudentAttendance.belongsTo(db.Student, { foreignKey: 'StudentID' });

// Subject → StudentAttendance
db.Subject.hasMany(db.StudentAttendance, { foreignKey: 'SubjectID' });
db.StudentAttendance.belongsTo(db.Subject, { foreignKey: 'SubjectID' });

// Faculty → StudentAttendance
db.Faculty.hasMany(db.StudentAttendance, { foreignKey: 'FacultyID' });
db.StudentAttendance.belongsTo(db.Faculty, { foreignKey: 'FacultyID' });

// Faculty → FacultyAttendance
db.Faculty.hasMany(db.FacultyAttendance, { foreignKey: 'FacultyID' });
db.FacultyAttendance.belongsTo(db.Faculty, { foreignKey: 'FacultyID' });

// Faculty → HODAttendance
db.Faculty.hasMany(db.HODAttendance, { foreignKey: 'FacultyID' });
db.HODAttendance.belongsTo(db.Faculty, { foreignKey: 'FacultyID' });

// Course → HOD (self ref via Faculty)
db.Faculty.hasOne(db.Course, { foreignKey: 'HodID' });

module.exports = db;
