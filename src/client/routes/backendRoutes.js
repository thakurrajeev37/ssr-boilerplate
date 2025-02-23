import express from "express";
import { pageGenerator } from "./pageGenerator.js";
const router = express.Router();

const pageRoutes = [
    "/home",
    "/dashboard"
]

router.get("/home", (req, res) => {
    pageGenerator(req, res);
});

export default router;