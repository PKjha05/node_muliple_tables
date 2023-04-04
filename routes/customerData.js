import { Router } from "express";
import { getData } from "../controllers/customerControllers.js";
const customerData= Router();

customerData.get("/customerData", (req, res)=>
{
    getData(req, res);
});

export default customerData;
