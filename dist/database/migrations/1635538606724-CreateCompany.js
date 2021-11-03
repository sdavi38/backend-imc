"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCompany1635538606724 = void 0;
const typeorm_1 = require("typeorm");
class CreateCompany1635538606724 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("company");
    }
}
exports.CreateCompany1635538606724 = CreateCompany1635538606724;
