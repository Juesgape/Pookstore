"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(buyer, book, quantity, totalOrder //seria multiplicar precio del libro por cantidad y asignar ese valor
    ) {
        this.buyer = buyer;
        this.book = book;
        this.quantity = quantity;
        this.totalOrder = totalOrder;
    }
}
exports.Order = Order;
