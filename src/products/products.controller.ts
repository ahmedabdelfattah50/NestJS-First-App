import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';

// ========== Interfaces ==========
interface ProductInterface {
  id: number;
  name: string;
}
// ==================================

// ========== DTOs for file ==========
class CreateProductDto {
  name: string;
}

class UpdateProductDto {
  name: string;
}
// ==================================

@Controller('products')
export class ProductsController {
  private products: ProductInterface[] = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    { id: 4, name: 'Product 4' },
  ];

  @Get()
  getAllProducts(): ProductInterface[] {
    return this.products;
  }

  @Get(':id')
  getSingleProduct(@Param('id') id: string): ProductInterface {
    return this.products.find((product) => product.id === Number(id));
  }

  @Post()
  createProduct(
    @Body() CreateProductDto: CreateProductDto,
  ): ProductInterface[] {
    this.products.push({ id: this.products.length + 1, ...CreateProductDto });
    return this.products;
  }

  @Put(':id')
  updateOneProduct(
    @Param('id') id: string,
    @Body() updateBody: UpdateProductDto,
  ): ProductInterface[] {
    const productIndex = this.products.findIndex(
      (prod) => prod.id === Number(id),
    );

    this.products[productIndex] = {
      ...this.products[productIndex],
      ...updateBody,
    };

    return this.products;
  }

  @Delete(':id')
  deleteOneProduct(@Param('id') id: string): ProductInterface[] {
    this.products = this.products.filter(
      (product) => product.id !== Number(id),
    );
    return this.products;
  }
}
