import { Request, Response } from "express";
import { formSchema } from "../schemas/formSchemas";
import { formService } from "../services/formService";
import { wrongSchemaError } from "../utils/errorUtils";

async function postForms(req: Request, res: Response){
    const validation = formSchema.validate(req.body);
    if(validation.error){
        throw wrongSchemaError();
    }
    await formService.insert(req.body);
    res.sendStatus(201);
}

export const formController = {
    postForms
}