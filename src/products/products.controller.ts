import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductInterface } from 'src/types/interfaces';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts(): ProductInterface[] {
    return this.productsService.getAllItems();
  }

  @Get(':id')
  getSingleProduct(@Param('id', ParseIntPipe) id: number): ProductInterface {
    return this.productsService.getOneProduct(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createProduct(
    @Body() createProductDto: CreateProductDto,
  ): ProductInterface[] {
    return this.productsService.createNewProduct(createProductDto);
  }

  @Put(':id')
  updateOneProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ): ProductInterface[] {
    return this.productsService.updateOneProduct(id, updateProductDto);
  }

  @Delete(':id')
  deleteOneProduct(@Param('id', ParseIntPipe) id: number): ProductInterface[] {
    return this.productsService.deleteOneProduct(id);
  }
}
