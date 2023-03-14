import { Router } from "express";

import formRouter from "./formRouter";

const router = Router();

router.use(formRouter);

export default router;