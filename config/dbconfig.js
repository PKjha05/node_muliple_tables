import { Sequelize } from "sequelize";

const user = "root";
const host ="localhost";
const database= "customer_data";
const password= "";

const sequelize =new Sequelize(database, user, password,{
    host,
    dialect:"mysql",
    logging:false
});
export default sequelize;