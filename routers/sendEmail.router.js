
import { Router } from "express";
import { sendEmail } from "../controllers/sendEmail.controller.js";

const router = Router();

// EndPoint de envio de gmail con nodemailer

router.post('/send', sendEmail)



export default router;