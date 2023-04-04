import { DataTypes, Model } from "sequelize";
import sequelize from "../config/dbconfig.js";


class customer extends Model{}

const config= {
sequelize:sequelize,
tableName:"customer",
timestamps: false
};

customer.init(
    {
        
        customerId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        mobile:
        {
            type:DataTypes.STRING,
            allowNull:false,
        },
        email:
        {
            type:DataTypes.STRING,
            allowNull:false,
        }

    },
    config
)

export default customer;