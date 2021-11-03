"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersProducts = void 0;
const typeorm_1 = require("typeorm");
const Order_1 = require("./Order");
const Product_1 = require("./Product");
let OrdersProducts = class OrdersProducts {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], OrdersProducts.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Order_1.Order, order => order.order_products),
    typeorm_1.JoinColumn({ name: 'order_id' }),
    __metadata("design:type", Order_1.Order)
], OrdersProducts.prototype, "order", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Product_1.Product, product => product.order_products, {
        cascade: true,
    }),
    typeorm_1.JoinColumn({ name: 'product_id' }),
    __metadata("design:type", Product_1.Product)
], OrdersProducts.prototype, "product", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OrdersProducts.prototype, "product_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OrdersProducts.prototype, "order_id", void 0);
__decorate([
    typeorm_1.Column({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], OrdersProducts.prototype, "price", void 0);
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], OrdersProducts.prototype, "quantity", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], OrdersProducts.prototype, "created_at", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], OrdersProducts.prototype, "updated_at", void 0);
OrdersProducts = __decorate([
    typeorm_1.Entity('orders_products')
], OrdersProducts);
exports.OrdersProducts = OrdersProducts;
