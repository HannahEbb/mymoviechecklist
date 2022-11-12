import { Film } from "@prisma/client";


export type IFilmData = Omit<Film, 'id' | 'status' | 'stars' | 'createdAt'>