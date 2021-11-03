"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsersRoles1627509179887 = void 0;
const typeorm_1 = require("typeorm");
class CreateUsersRoles1627509179887 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "users_roles",
            columns: [
                { name: "role_id", type: "uuid" },
                { name: "user_id", type: "uuid" },
            ],
            foreignKeys: [
                {
                    columnNames: ["role_id"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "roles",
                    name: "fk_roles_user",
                    onDelete: "RESTRICT",
                    onUpdate: "CASCADE",
                },
                {
                    columnNames: ["user_id"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "users",
                    name: "fk_users_roles",
                    onDelete: "RESTRICT",
                    onUpdate: "CASCADE",
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("users_roles");
    }
}
exports.CreateUsersRoles1627509179887 = CreateUsersRoles1627509179887;
