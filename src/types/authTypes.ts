import { User } from "@prisma/client";


export type IAuthData = Omit<User, 'id' | 'createdAt'>

export interface ITokenInterface {
    user: {
       userId: number;
    };
  }