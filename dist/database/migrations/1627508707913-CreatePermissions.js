"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePermissions1627508707913 = void 0;
const typeorm_1 = require("typeorm");
class CreatePermissions1627508707913 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "permissions",
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
                    name: "description",
                    type: "varchar",
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
        await queryRunner.dropTable("permissions");
    }
}
exports.CreatePermissions1627508707913 = CreatePermissions1627508707913;
