import joi from "joi";

const filmStatusSchema = joi.object({
    stars: joi.string().valid("1", "2", "3", "4", "5").required().messages({
        "any.required": "Você deve informar um nome!",
        "string.valid": "Informe uma nota válida: de 1 a 5!"
    }),
});


export default filmStatusSchema;