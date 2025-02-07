import express from "express";

const router = express.Router();

router.get("/" , (req : any, res : any) => {
    console.log(req.body);
})

export default router;