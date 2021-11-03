import { getRepository } from "typeorm";
import { Role } from "../entities/Role";
import { User } from "../entities/User";
import { Product } from "../entities/Product";
import { Permission } from "../entities/Permission";
import {Order} from '../entities/Order';
import { Company} from '../entities/Company';
import {OrdersProducts} from '../entities/OrderProducts'

export const UserRepository = () => {
  return getRepository(User);
};

export const RoleRepository = () => {
  return getRepository(Role);
};

export const PermissionRepository = () => {
  return getRepository(Permission);
};

export const ProductRepository = () => {
  return getRepository(Product);
};

export const CompanyRepository = () => {
  return getRepository(Company);
};
export const OrderRepository = () => {
  return getRepository(Order);
};
export const ProductOrderRepository = () => {
  return getRepository(OrdersProducts);
};
