module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Student", {
    ID: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    StudentName: { type: DataTypes.STRING, allowNull: false },
    CourseID: { type: DataTypes.INTEGER },
    SemesterID: { type: DataTypes.INTEGER },
    JoiningDate: { type: DataTypes.DATEONLY },
    PhoneNumber: { type: DataTypes.STRING },
    EmailID: { type: DataTypes.STRING, unique: true },
    Address: { type: DataTypes.TEXT }
  });
};
