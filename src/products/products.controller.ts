import { Body, Controller, Get, HttpStatus, Post, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Product } from "./schemas/product.schema";
import { CreateProductDto } from "./dto/product.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import {diskStorage} from 'multer';
import * as path from 'path';

@Controller('api/products')
export class ProductsController{
    constructor(private readonly productService: ProductsService){}
    @Post()
    @UseInterceptors(FileInterceptor('image',{
        storage: diskStorage({
            destination: './uploads',
            filename: (req,file,callBack)=>{
                const fileName = path.parse(file.originalname).name.replace(/\s/g,'') + Date.now();
                const extension =  path.parse(file.originalname).ext;
                callBack(null,`${fileName}${extension}`)
            }

        })
    }))
    async addProduct(@Res() res,@Body() product : CreateProductDto, @UploadedFile() image): Promise<Product>{
        product.image = image ? process.env.APP_URL + '/' + image.path : ''
        const response = await this.productService.insertProduct(product);
        return await res.status(HttpStatus.OK).json({
            data: response
        })
    }

    @Get()
    async getAllProducts(@Res() res): Promise<Product[]>{
        const products = await this.productService.findAll()
        return await res.status(HttpStatus.OK).json({
            data: products
        })
    }
}