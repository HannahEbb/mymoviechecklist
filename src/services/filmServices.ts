import * as filmRepositories from '../repositories/filmRepositories';

export async function  create(userId: number, name: string, streaming: string, genre: string) {
    const filmIsRegistered = await filmRepositories.findByName(userId, name); 
    if(filmIsRegistered) {
        throw { type: 'conflict', message: 'This film already exists!' };
    }

    const filmData = {userId, name, streaming, genre}
    await filmRepositories.insert(filmData);
}

export async function readAllFilms(userId: number) {
    const allUserFilms = await filmRepositories.findAllUserFilms(userId);

    return allUserFilms;
}

export async function readFilm(userId: number, filmId: number) {
    const userFilm = await filmRepositories.findFilmById(userId, filmId);
    if(!userFilm) {
        throw { type: 'not_found', message: 'Film not found!' };
    }

    return userFilm;
}

export async function readStreamingFilms(userId: number, streamingName: string) {
    const streamingFilms = await filmRepositories.findFilmsByStreaming(userId, streamingName);

    return streamingFilms;
}

export async function update(userId: number, filmId: number, filmStars: number) {
    const userFilm = await filmRepositories.findFilmById(userId, filmId);
    if(!userFilm) {
        throw { type: 'not_found', message: 'Film not found!' };
    }

    await filmRepositories.updateFilmStatusAndStars(userId, filmId, filmStars);
}

export async function deleteById(userId: number, filmId: number) {
    const userFilm = await filmRepositories.findFilmById(userId, filmId);
    if(!userFilm) {
        throw { type: 'not_found', message: 'Film not found!' };
    }

    await filmRepositories.deleteFilmById(userId, filmId);
}