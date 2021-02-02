module.exports = function(sequelize, DataTypes) {
  var Quiz = sequelize.define("Quiz", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "General"
    }
  });


  Quiz.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Quiz.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Quiz.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Quiz.hasMany(models.Question, {
      onDelete: "cascade"
    });
  };

  Quiz.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Quiz.hasMany(models.Score, {
      onDelete: "cascade"
    });
  };

  return Quiz;
};