import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrders1635549621999 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'orders',
            columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()',
              },
              {
                name: 'company_id',
                type: 'uuid',
                isNullable: true,
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
                name: 'CompanyOrder',
                referencedTableName: 'company',
                referencedColumnNames: ['id'],
                columnNames: ['company_id'],
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
              },
            ],
          }),
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orders');
      }
    }
    