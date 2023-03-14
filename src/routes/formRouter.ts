import { Router } from "express";
import { formController } from "../controllers/formController";

const formRouter = Router();

formRouter.post("/forms", formController.postForms);
formRouter.get("/forms", formController.getForms);

export default formRouter;
