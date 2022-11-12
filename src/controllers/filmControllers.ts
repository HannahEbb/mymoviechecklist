import { Request, Response } from 'express';
import * as filmServices from '../services/filmServices';


export async function writeNewFilm(req: Request, res: Response) {
    const { user } = res.locals;
    const { name, streaming, genre } = req.body;
    const userId = Number(user);

    await filmServices.create(userId, name, streaming, genre);

    res.sendStatus(201);
}

export async function readAllUserFilms(req: Request, res: Response) {
    const { user } = res.locals;
    const userId = Number(user);
    
    const allUserFilms = await filmServices.readAllFilms(userId);

    res.send(allUserFilms);
}

export async function readFilmById(req: Request, res: Response) {
    const { user } = res.locals;
    const userId = Number(user);
    
    const { id } = req.params; 
    const filmId = Number(id)

    const film = await filmServices.readFilm(userId, filmId);

    res.send(film);
}

export async function readFilmByStreaming(req: Request, res: Response) {
    const { user } = res.locals;
    const userId = Number(user);

    const { streaming } = req.params;
    const streamingName = streaming.split('-')[0];

    const films = await filmServices.readStreamingFilms(userId, streamingName);

    res.send(films);
}

export async function updateFilmById(req: Request, res: Response) {
    const { user } = res.locals;
    const userId = Number(user);
    const { id } = req.params; 
    const filmId = Number(id);
    const { stars } = req.body;
    const filmStars = Number(stars);

    await filmServices.update(userId, filmId, filmStars);

    res.sendStatus(204)
}

export async function deleteFilmById(req: Request, res: Response) {
    const { user } = res.locals;
    const userId = Number(user);
    const { id } = req.params;
    const filmId = Number(id);

    await filmServices.deleteById(userId, filmId);

    res.sendStatus(200)
}