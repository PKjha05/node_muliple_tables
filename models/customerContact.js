import { Model, DataTypes } from "sequelize";
import sequelize from "../config/dbconfig.js";

class customer_contact extends Model {}

const config = {
  sequelize: sequelize,
  tableName: "customer_contact",
  timestamps: false,
};

customer_contact.init(
  {
    contact_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  config
);

export default customer_contact;
