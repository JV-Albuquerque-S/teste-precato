import { forms_answers } from "@prisma/client";
import { prisma } from "../database";
import dayjs from "dayjs";

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

function findByCPF(cpf: string){
    return prisma.forms_answers.findUnique({
        where: {cpf},
    });
}

function findByPhone(phone: string){
    return prisma.forms_answers.findUnique({
        where: {phone},
    });
}

function findByDate(start_date: string, end_date: string){
    return prisma.forms_answers.findMany({
      where: {
        created_at: {
          lte: dayjs(dayjs(end_date).format("YYYY-MM-DD")).format(),
          gte: dayjs(dayjs(start_date).format("YYYY-MM-DD")).format(),
        },
      },
    });
  };

export const formRepository = {
    createForm,
    findByEmail,
    findByCPF,
    findByPhone,
    findByDate
}