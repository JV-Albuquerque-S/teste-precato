import { Router } from "express";
import { formController } from "../controllers/formController";

const formRouter = Router();

formRouter.post("/forms", formController.postForms);

export default formRouter;
