const { sequelize } = require("../Config/db.sequelize.js");
const { DataTypes } = require("sequelize");
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");

class UserModel extends Model {}

UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    password: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    telefon: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    sequelize,
    modelName: "user_tutorial",
    freezeTableName: true,
    underscored: true,
    createdAt: true,
    updatedAt: true,
    hooks: {
      beforeCreate: async (user, options) => {
        user.password = await createHash(user.password);
      },
      beforeUpdate: async (user, options) => {},
    },
  }
);

const createHash = async (string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedString = await bcrypt.hash(string, salt);
  return hashedString;
};

module.exports = UserModel;
