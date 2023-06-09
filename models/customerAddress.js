import { Model, DataTypes } from "sequelize";
import sequelize from "../config/dbconfig.js";

class customer_address extends Model {}

const config = {
  sequelize: sequelize,
  tableName: "customer_address",
  timestamps: false,
};

customer_address.init(
  {
    customerAddId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    State: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pincode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  config
);

export default customer_address;
