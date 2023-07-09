import { Body, Controller, Get, HttpStatus, Post, Res } from "@nestjs/common";
import { CartsService } from "./carts.service";
import { Cart } from "./schemas/cart.schema";
import { CreateCartDto } from "./dto/cart.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import {diskStorage} from 'multer';
import * as path from 'path';

@Controller('api/carts')
export class CartsController{
    constructor(private readonly cartService: CartsService){}
    @Post()
    async addCart(@Res() res,@Body() cart : CreateCartDto): Promise<Cart>{
        const response = await this.cartService.insertCart(cart);
        return await res.status(HttpStatus.OK).json({
            data: response
        })
    }

    @Get()
    async getAllCarts(@Res() res): Promise<Cart[]>{
        const carts = await this.cartService.findAll()
        return await res.status(HttpStatus.OK).json({
            data: carts
        })
    }
}