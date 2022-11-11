import joi from "joi";
import { IFilmData } from "../types/filmTypes";

const filmSchema = joi.object<IFilmData>({
    name: joi.string().required().messages({
        "any.required": "Você deve informar um nome!"
    }),
    streaming: joi.string().valid("Netflix", "Disney+", "Star+", "Amazon Prime", "Mubi", "Globoplay", "HBO Max").required().messages({
        "any.required": "Você deve informar uma plataforma de streaming!",
        "string.valid": "Informe uma plataforma válida: Netflix, Disney+, Star+, Amazon Prime, Mubi, Globoplay, HBO Max"
    }),
    genre: joi.string().valid("Action", "Thriller", "Comedy", "Drama", "Fantasy", "Mistery", "Romance", "Horror").required().messages({
        "any.required": "Você deve informar um gênero!",
        "string.valid": "Informe um gênero válido: Action, Thriller, Comedy, Drama, Fantasy, Mistery, Romance, Horror"
    })
});


export default filmSchema;