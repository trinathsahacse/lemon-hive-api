import { Body, Controller, Get, HttpStatus, Inject, Post, Res } from "@nestjs/common";
import { CartsService } from "./carts.service";
import { Cart, CartDocument } from "./schemas/cart.schema";
import { CreateCartDto } from "./dto/cart.dto";
import { ProductsService } from "src/products/products.service";
import { Product } from "src/products/schemas/product.schema";

@Controller('api/carts')
export class CartsController{
    @Inject(ProductsService)
    private readonly productService: ProductsService;
    constructor(private readonly cartService: CartsService){}
    @Post()
    async addCart(@Res() res,@Body() cart : CreateCartDto): Promise<Cart>{
        const response = await this.cartService.insertCart(cart);
        return await res.status(HttpStatus.OK).json({
            data: response
        })
    }

    @Get()
    async getAllCarts(@Res() res): Promise<CartDocument> {
        const carts = await this.cartService.findAll();
        for (let index = 0; index < carts.length; index++) {
            const cart: CreateCartDto = carts[index];
            cart.product = await this.productService.findSingle(cart.product_id);
        }

        return await res.status(HttpStatus.OK).json({
            data: carts,
        });
    }
}