import { CreateFormData } from "../repositories/formRepository";
import { formRepository } from "../repositories/formRepository";
import { conflictError, notFoundError } from "../utils/errorUtils";
import dayjs from "dayjs";

async function insert(CreateFormData: CreateFormData) {
    const existingEmail = await formRepository.findByEmail(
        CreateFormData.email
    );
    const existingCPF = await formRepository.findByCPF(
        CreateFormData.cpf
    );
    const existingPhone = await formRepository.findByPhone(
        CreateFormData.phone
    );
    if(existingEmail){
        throw conflictError("Email already used");
    }
    else if(existingCPF){
        throw conflictError("CPF already used");
    }
    else if(existingPhone){
        throw conflictError("Phone already used");
    }
    await formRepository.createForm(CreateFormData);
}

async function get(start_date: string, end_date: string){
    return formRepository.findByDate(start_date, end_date);
}

export const formService = {
    insert,
    get
}