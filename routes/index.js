import { Router } from "express";
import customerData from "./customerData.js";
const router = Router();

router.use("/customer", customerData)

export default router;