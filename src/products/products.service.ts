import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { InjectModel } from "@nestjs/mongoose";
import { Product } from "./schemas/product.schema";
import * as mongoose from "mongoose";

@Injectable()
export class ProductsService{
    constructor(
        @InjectModel(Product.name)
        private productModel: mongoose.Model<Product>
    ){}
    // products : Product[] = [];

    async insertProduct(product:Product): Promise<Product>{
        const res = await this.productModel.create(product)
        return res
    }

    async findAll(): Promise<Product[]> {
        const products = this.productModel.find()
        return products
    }
}