class Inventory {
    _totalbooks = 0;
    _books = [];
    _soldBooksRegister = [];
    //GETTERS
    get totalbooks() {
        return this._totalbooks;
    }
    get books() {
        return this._books;
    }
    get soldBooksRegister() {
        return this._soldBooksRegister;
    }
    //SETTERS
    set setTotalBooks(value) {
        this._totalbooks = value;
    }
    set setBooks(book) {
        this._books.push(book);
        //updating the total books in the inventory
        this.setTotalBooks = this._books.length;
    }
    set soldBooksRegister(newReceipt) {
        this._soldBooksRegister.push(newReceipt);
    }
    //METHODS
    updateTotalBooks(new_books) {
        this._totalbooks += new_books.length; //El numero de libros aumentará segun la cantidad de libros que se ingresan en el array
        this._books = [...this._books, ...new_books]; //Add values of new_books array
        console.log("Libros agregados con Exito");
    }
    removeBook(delete_books) {
        this._totalbooks -= delete_books.length; //maybe.
        for (let i = 0; i < delete_books.length; i++) {
            this._books = this._books.filter(e => e !== delete_books[i]); //Puede que funcione. Supongo que lo borra si encuentra exactamente el mismo objeto, porque o si no se borrarían libros que no se deben borrar
        }
        console.log("Los libros han sido removidos del inventario...");
    }
}
const store_inventory = new Inventory();
//testing the getters
store_inventory.totalbooks; //You call a setter like this
/* store_inventory.get_books()
store_inventory.get_soldbooksRegister() */
export { store_inventory };
