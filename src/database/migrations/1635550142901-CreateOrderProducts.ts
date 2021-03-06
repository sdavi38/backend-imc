import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateOrderProducts1635550142901 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'orders_products',
            columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()',
              },
              {
                name: 'order_id',
                type: 'uuid',
                isNullable: true,
              },
              {
                name: 'product_id',
                type: 'uuid',
                isNullable: true,
              },
              {
                name: 'price',
                type: 'decimal',
                precision: 10,
                scale: 2,
              },
              {
                name: 'quantity',
                type: 'int',
              },
              {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()',
              },
              {
                name: 'updated_at',
                type: 'timestamp',
                default: 'now()',
              },
            ],
            foreignKeys: [
              {
                name: 'Order',
                referencedTableName: 'orders',
                referencedColumnNames: ['id'],
                columnNames: ['order_id'],
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
              },
              {
                name: 'Product',
                referencedTableName: 'products',
                referencedColumnNames: ['id'],
                columnNames: ['product_id'],
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
              },
            ],
          }),
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orders_products');
      }
    }