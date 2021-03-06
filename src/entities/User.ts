import {
  Column,
  Entity,
  getRepository,
  JoinColumn,
  JoinTable,
  ManyToMany,
  RelationId,
} from "typeorm";
import { BaseEntity } from "./BaseEntity.js";
import { Permission } from "./Permission";
import { Role } from "./Role";

@Entity("users")
export class User extends BaseEntity {
  @Column()
  name: string;
  
  @Column()
  email: string;

  @Column()
  password: string;



  @ManyToMany(() => Role)
  @JoinTable({
    name: "users_roles",
    joinColumns: [{ name: "user_id" }],
    inverseJoinColumns: [{ name: "role_id" }],
  })
  roles: Role[];

  @ManyToMany(() => Permission)
  @JoinTable({
    name: "users_permissions",
    joinColumns: [{ name: "user_id" }],
    inverseJoinColumns: [{ name: "permission_id" }],
  })
  permissions: Permission[];
}
