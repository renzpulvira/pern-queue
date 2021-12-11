"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Queues extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  // TODO: Create a room_id column thats relationship with `room_id` from `rooms` TABLE
  Queues.init(
    {
      uuid: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 },
      video_id: { type: DataTypes.STRING, allowNull: false },
      channel_id: { type: DataTypes.STRING, allowNull: false },
      title: { type: DataTypes.STRING, allowNull: false },
      queued_by: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      tableName: "queues",
      modelName: "Queues",
    }
  );
  return Queues;
};
