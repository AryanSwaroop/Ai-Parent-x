import express from "express";

const router = express.Router();

router.get("/login" , (req : any, res : any) => {
    console.log(req.body);
})

router.get("/register" , (req : any, res : any) => {})

router.get("/logout" , (req : any, res : any) => {});

export default router;