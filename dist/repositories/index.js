"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderRepository = exports.OrderRepository = exports.CompanyRepository = exports.ProductRepository = exports.PermissionRepository = exports.RoleRepository = exports.UserRepository = void 0;
const typeorm_1 = require("typeorm");
const Role_1 = require("../entities/Role");
const User_1 = require("../entities/User");
const Product_1 = require("../entities/Product");
const Permission_1 = require("../entities/Permission");
const Order_1 = require("../entities/Order");
const Company_1 = require("../entities/Company");
const OrderProducts_1 = require("../entities/OrderProducts");
const UserRepository = () => {
    return typeorm_1.getRepository(User_1.User);
};
exports.UserRepository = UserRepository;
const RoleRepository = () => {
    return typeorm_1.getRepository(Role_1.Role);
};
exports.RoleRepository = RoleRepository;
const PermissionRepository = () => {
    return typeorm_1.getRepository(Permission_1.Permission);
};
exports.PermissionRepository = PermissionRepository;
const ProductRepository = () => {
    return typeorm_1.getRepository(Product_1.Product);
};
exports.ProductRepository = ProductRepository;
const CompanyRepository = () => {
    return typeorm_1.getRepository(Company_1.Company);
};
exports.CompanyRepository = CompanyRepository;
const OrderRepository = () => {
    return typeorm_1.getRepository(Order_1.Order);
};
exports.OrderRepository = OrderRepository;
const ProductOrderRepository = () => {
    return typeorm_1.getRepository(OrderProducts_1.OrdersProducts);
};
exports.ProductOrderRepository = ProductOrderRepository;
