module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Course", {
    ID: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    CourseName: { type: DataTypes.STRING, allowNull: false },
    HodID: { type: DataTypes.INTEGER, allowNull: true }
  });
};
