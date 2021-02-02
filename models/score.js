module.exports = function(sequelize, DataTypes) {
  var Score = sequelize.define("Score", {
    scores: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  Score.associate = function(models) {
    Score.belongsTo(models.Quiz, {
      onDelete: "cascade"
    });
  };
  Score.associate = function(models) {
    Score.belongsTo(models.User, {
      onDelete: "cascade"
    });
  };
  return Score;
};
