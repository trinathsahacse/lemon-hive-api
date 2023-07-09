import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, SchemaTypes } from 'mongoose';
import { Product, ProductSchema } from "src/products/schemas/product.schema";
import { Type } from 'class-transformer';

export type CartDocument = Cart & Document;
@Schema({
    timestamps: true
})
export class Cart{
    @Prop({ type: SchemaTypes.ObjectId, ref: 'Product' })
    product_id: string;
    
    @Prop({required: false, default: 1})
    quantity: number;

    @Prop()
    price: number;

    @Prop()
    subtotal: number;
    
    @Prop({ type: ProductSchema })
    @Type(() => Product)
    product: Product;
}
export const CartSchema = SchemaFactory.createForClass(Cart)