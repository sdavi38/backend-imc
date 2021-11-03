"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrders1635549621999 = void 0;
const typeorm_1 = require("typeorm");
class CreateOrders1635549621999 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('orders');
    }
}
exports.CreateOrders1635549621999 = CreateOrders1635549621999;
