import { Film } from "@prisma/client";


export type IFilmData = Omit<Film, 'id' | 'userId' | 'status' | 'stars' | 'createdAt'>