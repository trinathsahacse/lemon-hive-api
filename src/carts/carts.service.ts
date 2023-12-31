import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { InjectModel } from "@nestjs/mongoose";
import { Cart, CartDocument } from "./schemas/cart.schema";
import * as mongoose from "mongoose";

@Injectable()
export class CartsService{
    constructor(
        @InjectModel('Cart')
        private cartModel: mongoose.Model<Cart>
    ){}
    // products : Product[] = [];

    async insertCart(cart:Cart): Promise<Cart>{
        const res = await this.cartModel.create(cart)
        return res
    }

    async findAll(): Promise<CartDocument[]> {
        const carts = this.cartModel.find()
        return carts
    }
}