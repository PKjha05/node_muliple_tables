import sequelize from "./config/dbconfig.js";

 const syncModels=()=>{
    sequelize
    .sync({alter: false})
    .then(async(result)=>{
        console.log("connection successful");
    })
    .catch((error)=>
    {
        console.log(error);

    });


}
export default syncModels;