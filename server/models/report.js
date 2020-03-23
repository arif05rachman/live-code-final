'use strict';
module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define('Report', {
    cases: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    CountryId: DataTypes.INTEGER
  }, {sequelize});
  Report.associate = function(models) {
    // associations can be defined here
    Report.belongsTo(models.Country)
    Report.belongsTo(models.User);
  };
  return Report;
};