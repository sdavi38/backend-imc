import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
    OneToMany,
    Column,
  } from 'typeorm';
  
  import {Company} from './Company';
  import {OrdersProducts} from './OrderProducts'
  import { BaseEntity } from "./BaseEntity";
   
  @Entity('orders')
  export class Order  extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    customer_id: string;
  
    @ManyToOne(() => Company, {
      cascade: true,
      eager: true,
    })
    @JoinColumn({ name: 'company_id' })
    company: Company;
  
    @OneToMany(() => OrdersProducts, ordersProducts => ordersProducts.order, {
      cascade: true,
      eager: true,
    })
    order_products: OrdersProducts[];
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  
  
  