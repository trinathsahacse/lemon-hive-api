import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class Product{
    @Prop()
    name: string;
    @Prop()
    slug: string;
    @Prop({required: false})
    description: string;
    @Prop({required: false})
    image: string;
    @Prop({required: false, default: 1})
    quantity: number;
    @Prop()
    price: number;
    @Prop()
    discount_start: Date;
    @Prop()
    discount_end: Date
}
export const ProductSchema = SchemaFactory.createForClass(Product)