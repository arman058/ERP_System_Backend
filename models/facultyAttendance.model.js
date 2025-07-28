module.exports = (sequelize, DataTypes) => {
  return sequelize.define("FacultyAttendance", {
    ID: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    FacultyID: { type: DataTypes.INTEGER },
    Date: { type: DataTypes.DATEONLY, allowNull: false },
    Status: {
      type: DataTypes.ENUM('Present', 'Absent', 'Late', 'Excused'),
      defaultValue: 'Present'
    },
    TimeMarked: { type: DataTypes.TIME },
    FaceScanVerified: { type: DataTypes.BOOLEAN, defaultValue: false }
  });
};
