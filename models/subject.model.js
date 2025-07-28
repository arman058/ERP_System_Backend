module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Subject", {
    ID: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    SubjectName: { type: DataTypes.STRING, allowNull: false },
    CourseID: { type: DataTypes.INTEGER },
    FacultyID: { type: DataTypes.INTEGER },
    SemesterID: { type: DataTypes.INTEGER }
  });
};
