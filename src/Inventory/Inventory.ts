import { Book } from "../Book/Book.js"

//delete this types

// type Book={
//     text: string
// }

//Receipt como objeto: factura
type Receipt = {
    text: string[]
}


class Inventory{
    private _totalbooks:number = 0
    private _books: Book[]=[]
    private _soldbooksRegister:Receipt[]=[]

    //GETTERS
    public get totalbooks():number {
        return this._totalbooks
    }

    public get books(): Book[]{
        return this._books
    }

    //SETTERS

    public set setTotalBooks(value: number) {
      this._totalbooks = value
    }

    public set setBooks(book: Book) {
      this._books.push(book)

      //updating the total books in the inventory
      this.setTotalBooks = this._books.length
    }

    public get_soldbooksRegister():void{
        for(let i:number=0;i < this._soldbooksRegister.length;i++){
            console.log(this._soldbooksRegister[i]);

        }
    }
    //METHODS
    public updateTotalBooks(new_books:[]):void{
        this._totalbooks+=new_books.length //El numero de libros aumentará segun la cantidad de libros que se ingresan en el array

        this._books=[...this._books, ...new_books]//Add values of new_books array
        console.log("Libros agregados con Exito")
    }

    public removeBook(delete_books:[]){
        this._totalbooks -= delete_books.length //maybe.
        for(let i:number=0;i<delete_books.length;i++){
            this._books=this._books.filter(e => e !== delete_books[i])//Puede que funcione. Supongo que lo borra si encuentra exactamente el mismo objeto, porque o si no se borrarían libros que no se deben borrar
        }
        console.log("Los libros han sido removidos del inventario...")
    }

}

const store_inventory= new Inventory()
//testing the getters
store_inventory.totalbooks //You call a setter like this
/* store_inventory.get_books()
store_inventory.get_soldbooksRegister() */

export {
  store_inventory
}

