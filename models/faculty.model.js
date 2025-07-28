module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Faculty", {
    ID: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    FacultyName: { type: DataTypes.STRING, allowNull: false },
    CourseID: { type: DataTypes.INTEGER },
    SemesterID: { type: DataTypes.INTEGER },
    JoiningDate: { type: DataTypes.DATEONLY },
    PhoneNumber: { type: DataTypes.STRING },
    EmailID: { type: DataTypes.STRING, unique: true },
    Address: { type: DataTypes.TEXT }
  });
};
