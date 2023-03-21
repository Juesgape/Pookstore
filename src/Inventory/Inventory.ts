//delete this types

type Book={
    text: string
}

//Receipt como objeto: factura
type Receipt={
    text: string[]

}


class Inventory{
    private totalbooks:number=0
    private books: Book[]=[]
    private soldbooksRegister:Receipt[]=[]

    //GETTERS
   public get_totalbooks():void{
        console.log(this.totalbooks)
    }

   public get_books():void{
        for(let i:number=0;i < this.books.length;i++){
            console.log(this.books[i]);
            
        }
    }
    public get_soldbooksRegister():void{
        for(let i:number=0;i < this.soldbooksRegister.length;i++){
            console.log(this.soldbooksRegister[i]);
            
        }
    }
    //METHODS
    public updateTotalBooks(new_books:[]):void{
        this.totalbooks+=new_books.length //El numero de libros aumentará segun la cantidad de libros que se ingresan en el array

        this.books=[...this.books, ...new_books]//Add values of new_books array
        console.log("Libros agregados con Exito")
    }

    public removeBook(delete_books:[]){
        this.totalbooks-=delete_books.length //maybe. 
        for(let i:number=0;i<delete_books.length;i++){
            this.books=this.books.filter(e => e !== delete_books[i])//Puede que funcione. Supongo que lo borra si encuentra exactamente el mismo objeto, porque o si no se borrarían libros que no se deben borrar
        }
        console.log("Los libros han sido removidos del inventario...")
    }

}

const store_inventory= new Inventory()
//testing the getters
store_inventory.get_totalbooks()
store_inventory.get_books()
store_inventory.get_soldbooksRegister()

