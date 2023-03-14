import { Router } from "express";
import { postForms } from "../controllers/formController";
import { validateSchema } from "../middlewares/validateSchema";
import { formSchema } from "../schemas/formSchemas";

const formRouter = Router();

formRouter.post("/forms", validateSchema(formSchema), postForms);

export default formRouter;
