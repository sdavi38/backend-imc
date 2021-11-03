"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProducts1627581188607 = void 0;
const typeorm_1 = require("typeorm");
class CreateProducts1627581188607 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("products");
    }
}
exports.CreateProducts1627581188607 = CreateProducts1627581188607;
