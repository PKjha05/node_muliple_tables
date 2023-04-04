import sequelize from "../config/dbconfig.js";
import customer from "../models/customer.js";
import customer_address from "../models/customerAddress.js";
export const getData = async (req, res)=>
{
    try{
    const users = await customer_address.findAll();
    return res.status(200).json({message: "success", data:users});
    }
    catch(error)
    {
        console.log(error);
    }
      

};