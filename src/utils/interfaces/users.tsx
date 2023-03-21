import { avatarType } from "../types/avatar"

export interface users  {
    userId:string,
    username:string,
    email:string,
    avatar:avatarType,
    birthdate:Date,
    registeredAt:Date,
}