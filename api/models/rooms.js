"use strict";
const { Model, UUIDV4 } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rooms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rooms.init(
    {
      room_id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 },
      room_name: { type: DataTypes.STRING, allowNull: false },
      room_descrip: { type: DataTypes.TEXT, allowNull: true },
    },
    {
      sequelize,
      tableName: "rooms",
      modelName: "Rooms",
    }
  );
  return Rooms;
};
