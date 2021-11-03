import { Entity, Column, CreateDateColumn, PrimaryColumn, OneToMany } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import {OrdersProducts} from './OrderProducts'

@Entity("products")
export class Product extends BaseEntity {
  @Column()
  @PrimaryColumn()
  tipo: string;

  @Column()
  description: string;

  @OneToMany(() => OrdersProducts, ordersProducts => ordersProducts.product)
  order_products: OrdersProducts[];

  @Column()
  price:string;


  
}
