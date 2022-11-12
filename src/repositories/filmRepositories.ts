import { prisma } from '../dbconfig/db';
import { IFilmData } from '../types/filmTypes';

export async function findByName(userId: number, name: string) {
    const result = await prisma.film.findFirst({ where: { userId, name } }); 
    return result;
}

export async function insert(filmData: IFilmData) {
    await prisma.film.create({ data: filmData });
} 

export async function findAllUserFilms(userId: number) {
    const result = await prisma.film.findMany({ where: { userId } });
    return result;
}

export async function findFilmById(userId: number, filmId: number) {
    const result = await prisma.film.findFirst({ where: { id: filmId, userId } });
    return result;
}

export async function findFilmsByStreaming(userId: number, streamingName: string) {
    const result = await prisma.film.findMany({ where: { userId, streaming: {contains: streamingName, mode: 'insensitive'} } });
    return result;
}

export async function updateFilmStatusAndStars(userId: number, filmId: number, filmStars: number) {
    await prisma.film.updateMany({
        where: {userId, id: filmId},
        data: {
            status: true,
            stars: filmStars
        }
    })
}

export async function deleteFilmById(userId: number, filmId: number) {
    await prisma.film.deleteMany({ where: { userId, id: filmId } })
}