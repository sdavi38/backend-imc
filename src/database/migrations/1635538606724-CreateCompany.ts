import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateCompany1635538606724 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "company",
            columns: [
              {
                name: "id",
                type: "uuid",
                isPrimary: true,
              },
              {
                name: "name",
                type: "varchar",
              },
              {
                name: "cnpj",
                type: "varchar",
              },
              {
                name: "contact  ",
                type: "varchar",
              },
    
              {
                name: "email",
                type: "varchar",
              },
              {
                name: "address",
                type: "varchar",
              },
              {
                name: "responsible",
                type: "varchar",
              },
              {
                name: "created_at",
                type: "timestamp",
                default: "now()",
              },
              {
                name: 'updated_at',
                type: 'timestamp',
                default: 'now()',
              },
            ],
          })
        );
      }
    

      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("company");
      }
    }
    
