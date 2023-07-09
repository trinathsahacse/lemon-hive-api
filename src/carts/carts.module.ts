import { Module } from "@nestjs/common";
import { CartsService } from "./carts.service";
import { MongooseModule } from "@nestjs/mongoose";
import { CartsController } from "./carts.controller";
import { CartSchema } from "./schemas/cart.schema";

@Module({
    imports: [MongooseModule.forFeature([{name:'Cart',schema:CartSchema}])],
    controllers: [CartsController],
    providers: [CartsService]
})
export class CartsModule {}