import express from "express";

const router = express.Router();

router.get("/login" , (req : any, res : any) => {
    console.log(req.body);
})

export default router;