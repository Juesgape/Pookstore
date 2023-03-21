"use strict";
//delete this types
class Inventory {
    constructor() {
        this.totalbooks = 0;
        this.books = [];
        this.soldbooksRegister = [];
    }
    //GETTERS
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
    //METHODS
    updateTotalBooks(new_books) {
        this.totalbooks += new_books.length; //El numero de libros aumentará segun la cantidad de libros que se ingresan en el array
        this.books = [...this.books, ...new_books]; //Add values of new_books array
        console.log("Libros agregados con Exito");
    }
    removeBook(delete_books) {
        this.totalbooks -= delete_books.length; //maybe. 
        for (let i = 0; i < delete_books.length; i++) {
            this.books = this.books.filter(e => e !== delete_books[i]); //Puede que funcione. Supongo que lo borra si encuentra exactamente el mismo objeto, porque o si no se borrarían libros que no se deben borrar
        }
        console.log("Los libros han sido removidos del inventario...");
    }
}
const store_inventory = new Inventory();
//testing the getters
store_inventory.get_totalbooks();
store_inventory.get_books();
store_inventory.get_soldbooksRegister();
