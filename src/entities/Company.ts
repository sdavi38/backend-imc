import { Column, Entity } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("company")
export class Company extends BaseEntity {
  @Column()
  name: string;

  @Column()
  cnpj: string;

  @Column()
  contact: string;

  @Column()
  email: string;
  
  @Column()
  address: string;

  @Column()
  responsible: string;
}
