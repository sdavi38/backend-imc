import { ProductRepository } from "../repositories";
import {Product} from '../entities/Product'

type ProductRequest = {
  tipo: string;
  description: string;
 
};

export class CreateProductsService {
  async execute({ tipo, description }: ProductRequest): Promise<Error | Product> {
    const existsTipo = await ProductRepository().findOne({tipo});

    if (existsTipo) {
      return new Error("Type already exists")
    }
    const product = ProductRepository().create({
      tipo,
      description,
      
    });

    await ProductRepository().save(product);

    return product;
  }
}
