import { Request, Response } from "express";
import { formSchema } from "../schemas/formSchemas";
import { formService } from "../services/formService";
import { wrongSchemaError } from "../utils/errorUtils";

async function postForms(req: Request, res: Response){
    const validation = formSchema.validate(req.body);
    if(validation.error){
        let wrongEntry = validation.error.details[0].context?.key;
        throw wrongSchemaError(wrongEntry+" must be valid");
    }
    await formService.insert(req.body);
    res.sendStatus(201);
}

async function getForms(req: Request, res: Response){
    const {start_date, end_date} = req.body;
    const forms = await formService.get(start_date, end_date);
    res.send(forms);
}

export const formController = {
    postForms,
    getForms
}