"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePermissionsRoles1627508996984 = void 0;
const typeorm_1 = require("typeorm");
class CreatePermissionsRoles1627508996984 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "permissions_roles",
            columns: [
                { name: "role_id", type: "uuid" },
                { name: "permission_id", type: "uuid" },
            ],
            foreignKeys: [
                {
                    columnNames: ["permission_id"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "permissions",
                    name: "fk_permissions_roles_",
                    onDelete: "RESTRICT",
                    onUpdate: "CASCADE",
                },
                {
                    columnNames: ["role_id"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "roles",
                    name: "fk_roles_permissions",
                    onDelete: "RESTRICT",
                    onUpdate: "CASCADE",
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("permissions_roles");
    }
}
exports.CreatePermissionsRoles1627508996984 = CreatePermissionsRoles1627508996984;
