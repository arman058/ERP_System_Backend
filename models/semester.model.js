module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Semester", {
    ID: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    SemesterNumber: { type: DataTypes.INTEGER, allowNull: false },
    CourseID: { type: DataTypes.INTEGER }
  });
};
