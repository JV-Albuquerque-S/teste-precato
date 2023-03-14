import { CreateFormData } from "../repositories/formRepository";
import { formRepository } from "../repositories/formRepository";
import { conflictError, notFoundError } from "../utils/errorUtils";

async function insert(CreateFormData: CreateFormData) {
    const existingEmail = await formRepository.findByEmail(
        CreateFormData.email
    );
    if(existingEmail){
        throw conflictError("Email already used");
    }
    await formRepository.createForm(CreateFormData);
}

export const formService = {
    insert
}