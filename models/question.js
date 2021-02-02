module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define("Question", {
    question: {
      type: DataTypes.STRING,
      allowNull: false
    },
    choiceA: {
      type: DataTypes.STRING,
      allowNull: false
    },
    choiceB: {
      type: DataTypes.STRING,
      allowNull: true
    },
    choiceC: {
      type: DataTypes.STRING,
      allowNull: true
    },
    choiceD: {
      type: DataTypes.STRING,
      allowNull: true
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    QuizId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Question.associate = function(models) {
    Question.belongsTo(models.Quiz, {
      foreginKey: {
        allowNull: false
      }
    });
  };

  return Question;
};