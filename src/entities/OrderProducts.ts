import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    PrimaryGeneratedColumn,
    ManyToOne,
  } from 'typeorm';
  
  import {Order} from './Order';
  import {Product} from './Product';
  
  @Entity('orders_products')
  export class OrdersProducts {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @ManyToOne(() => Order, order => order.order_products)
    @JoinColumn({ name: 'order_id' })
    order: Order;
  
    @ManyToOne(() => Product, product => product.order_products, {
      cascade: true,
    })
    @JoinColumn({ name: 'product_id' })
    product: Product;
  
    @Column()
    product_id: string;
  
    @Column()
    order_id: string;
  
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;
  
    @Column('int')
    quantity: number;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  

  