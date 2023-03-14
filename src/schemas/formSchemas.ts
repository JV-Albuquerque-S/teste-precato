import Joi from "joi";

export const formSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    cpf: Joi.string().regex(/^[0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2}$/),
    phone: Joi.string().regex(/^([1-9]{2}\) 9[0-9]{4}[\-]?[0-9]{4}$/)
})
