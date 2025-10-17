import { Injectable } from '@nestjs/common';
import {
  ProductInterface,
  CreateProductDto,
  UpdateProductDto,
} from 'src/types/interfaces';

@Injectable()
export class ProductsService {
  private products: ProductInterface[] = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    { id: 4, name: 'Product 4' },
  ];

  getAllItems(): ProductInterface[] {
    return this.products;
  }

  getOneProduct(id: number): ProductInterface {
    return this.products.find((product) => product.id === id);
  }

  createNewProduct(productBody: CreateProductDto): ProductInterface[] {
    this.products.push({ id: this.products.length + 1, ...productBody });
    return this.products;
  }

  updateOneProduct(
    id: number,
    productBody: UpdateProductDto,
  ): ProductInterface[] {
    const productIndex = this.products.findIndex(
      (prod) => prod.id === Number(id),
    );

    this.products[productIndex] = {
      ...this.products[productIndex],
      ...productBody,
    };

    return this.products;
  }

  deleteOneProduct(id: number): ProductInterface[] {
    this.products = this.products.filter(
      (product) => product.id !== Number(id),
    );
    return this.products;
  }
}
