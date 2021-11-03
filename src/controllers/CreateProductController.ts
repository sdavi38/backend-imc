import { Request, Response } from "express";
import { CreateProductsService } from "../services/CreateProductsService";

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const { tipo, description } = request.body;

    const createProductService = new CreateProductsService();
    const product = await createProductService.execute({
      tipo,
      description,
   
    });

    return response.json(product);
  }
}
