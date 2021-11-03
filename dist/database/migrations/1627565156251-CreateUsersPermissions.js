"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsersPermissions1627565156251 = void 0;
const typeorm_1 = require("typeorm");
class CreateUsersPermissions1627565156251 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "users_permissions",
            columns: [
                { name: "permission_id", type: "uuid" },
                { name: "user_id", type: "uuid" },
            ],
            foreignKeys: [
                {
                    columnNames: ["permission_id"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "permissions",
                    name: "fk_roles_user",
                    onDelete: "RESTRICT",
                    onUpdate: "CASCADE",
                },
                {
                    columnNames: ["user_id"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "users",
                    name: "fk_users_permissions",
                    onDelete: "RESTRICT",
                    onUpdate: "CASCADE",
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("users_permissions");
    }
}
exports.CreateUsersPermissions1627565156251 = CreateUsersPermissions1627565156251;
