import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProducts1627581188607 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          { name: "id", isPrimary: true, type: "uuid" },
          {
            name: "tipo",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
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
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
            },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products");
  }
}
