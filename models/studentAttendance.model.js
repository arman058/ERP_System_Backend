module.exports = (sequelize, DataTypes) => {
  return sequelize.define("StudentAttendance", {
    ID: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    StudentID: { type: DataTypes.INTEGER },
    SubjectID: { type: DataTypes.INTEGER },
    FacultyID: { type: DataTypes.INTEGER },
    Date: { type: DataTypes.DATEONLY, allowNull: false },
    Status: {
      type: DataTypes.ENUM('Present', 'Absent', 'Late', 'Excused'),
      defaultValue: 'Present'
    },
    TimeMarked: { type: DataTypes.TIME },
    MarkedBy: { type: DataTypes.ENUM('Faculty', 'HOD') }
  });
};
