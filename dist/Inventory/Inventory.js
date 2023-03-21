"use strict";
//delete this types
class Inventory {
    constructor() {
        this.totalbooks = 0;
        this.books = [];
        this.soldbooksRegister = [];
    }
    get_totalbooks() {
        console.log(this.totalbooks);
    }
    get_books() {
        for (let i = 0; i < this.books.length; i++) {
            console.log(this.books[i]);
        }
    }
    get_soldbooksRegister() {
        for (let i = 0; i < this.soldbooksRegister.length; i++) {
            console.log(this.soldbooksRegister[i]);
        }
    }
}
const store_inventory = new Inventory();
store_inventory.get_totalbooks();
store_inventory.get_books();
store_inventory.get_soldbooksRegister();
