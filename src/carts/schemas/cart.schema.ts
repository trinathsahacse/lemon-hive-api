import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true
})
export class Cart{
    @Prop()
    product_id: string;
    @Prop()
    @Prop({required: false, default: 1})
    quantity: number;
    @Prop()
    price: number;
    
}
export const CartSchema = SchemaFactory.createForClass(Cart)