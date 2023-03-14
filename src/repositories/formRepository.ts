import { forms_answers } from "@prisma/client";
import { prisma } from "../database.js";

export type CreateFormData = Omit<forms_answers, "id">;

async function createForm(CreateFormData: CreateFormData){
    await prisma.forms_answers.create({
        data: CreateFormData,
    });
}

function findByEmail(email: string){
    return prisma.forms_answers.findUnique({
        where: {email},
    });
}

export const formRepository = {
    createForm,
    findByEmail
}