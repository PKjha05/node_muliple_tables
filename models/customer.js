import { DataTypes, Model } from "sequelize";
import sequelize from "../config/dbconfig.js";
import customer_address from "./customerAddress.js";
import customer_contact from "./customerContact.js";

class customer extends Model {}

const config = {
  sequelize: sequelize,
  tableName: "customer",
  timestamps: true,
};

customer.init(
  {
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  config
);

export default customer;

customer_address.belongsTo(customer, {
  foreignKey: "customerId",
  as: "customerAdd",
});
customer.hasMany(customer_address, {
  foreignKey: "customerId",
  as: "MasterCustomerAdd",
});
customer_contact.belongsTo(customer, {
  foreignKey: "customerId",
  as: "CustomerContact",
});
customer.hasMany(customer_contact, {
  foreignKey: "customerId",
  as: "MasterCustomerContact",
});
