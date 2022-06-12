import {User} from '../models/User'

export interface Order {
    user: User,
    items: [], 
    totalPrice: number,
    addres: string,
}