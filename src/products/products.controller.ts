import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import {
  ProductInterface,
  CreateProductDto,
  UpdateProductDto,
} from 'src/types/interfaces';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts(): ProductInterface[] {
    return this.productsService.getAllItems();
  }

  @Get(':id')
  getSingleProduct(@Param('id') id: string): ProductInterface {
    return this.productsService.getOneProduct(+id);
  }

  @Post()
  createProduct(
    @Body() CreateProductDto: CreateProductDto,
  ): ProductInterface[] {
    return this.productsService.createNewProduct(CreateProductDto);
  }

  @Put(':id')
  updateOneProduct(
    @Param('id') id: string,
    @Body() updateBody: UpdateProductDto,
  ): ProductInterface[] {
    return this.productsService.updateOneProduct(+id, updateBody);
  }

  @Delete(':id')
  deleteOneProduct(@Param('id') id: string): ProductInterface[] {
    return this.productsService.deleteOneProduct(+id);
  }
}
