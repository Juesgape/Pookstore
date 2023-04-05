/* import * as puppeteer from "puppeteer" */
import { Book } from "../Book/Book.js"
import { store_inventory } from "../Inventory/Inventory.js"
import { createBookCategory } from "../selectFav.js"
import { showBooks } from "../selectFav.js"

class GetBooks {
  constructor(
    private _urls: string[] = [
      "https://www.goodreads.com/choiceawards/best-mystery-thriller-books-2022",
      "https://www.goodreads.com/choiceawards/best-historical-fiction-books-2022",
      "https://www.goodreads.com/choiceawards/best-fantasy-books-2022",
      "https://www.goodreads.com/choiceawards/best-romance-books-2022",
      "https://www.goodreads.com/choiceawards/best-science-fiction-books-2022",
      "https://www.goodreads.com/choiceawards/best-horror-books-2022",
      "https://www.goodreads.com/choiceawards/best-humor-books-2022",
      "https://www.goodreads.com/choiceawards/best-nonfiction-books-2022",
      "https://www.goodreads.com/choiceawards/best-memoir-autobiography-books-2022",
      "https://www.goodreads.com/choiceawards/best-history-biography-books-2022",
      "https://www.goodreads.com/choiceawards/best-graphic-novels-comics-2022",
      "https://www.goodreads.com/choiceawards/best-poetry-books-2022",
      "https://www.goodreads.com/choiceawards/best-debut-novel-2022",
      "https://www.goodreads.com/choiceawards/best-young-adult-fiction-books-2022",
      "https://www.goodreads.com/choiceawards/best-young-adult-fantasy-books-2022",
      "https://www.goodreads.com/choiceawards/best-childrens-books-2022"
    ],

    private _userFavGenresLinks: string[] = [],
    private _booksAPI: Object = {}

  ) {}

      public set booksAPI( newBooks:Object ) {
        this._booksAPI = newBooks
      }

      public get booksAPI() {
        return `This is the main book Object ${this._booksAPI}`
      }

      public getFavoriteLinks(userLikes: string[]): void {

        let toLowerGenres: string[] = userLikes.map(e => {
          e = e.toLowerCase()
          e = e.replace(" ", "-")
          return e
        })

        for(let i = 0; i < toLowerGenres.length; i++) {
          //create new array with the urls that match the user's likes
          let newVersion = this._urls.filter(element => element.includes(toLowerGenres[i]))

          newVersion.forEach(e => {
            /* console.log('Element', e); */
            this._userFavGenresLinks.push(e)
            })

        }
        console.log('User likes', this._userFavGenresLinks);
    }

    public createBook(books: Object) {
      let id = 1

      for (const key in books) {
        if(books.hasOwnProperty(key)) {
          const bookArray = books[key] // I honestly dont know what to do with this XDXD
          //this will create a new category in the index HTML code
          createBookCategory(key)

          //This will store all of our books by genre so that we can show them later on in out application
          let totalBooksByGenre: Book[] = []

          for(const book of bookArray) {
            const genre: string = key
            //destructuring the book properties
            const {title, author, description, img} = book;
            //creating instances of the class Book
            const newBook = new Book(id.toString(), title, author, description, img, genre, Math.floor(Math.random() * 500000).toLocaleString(), 'Unknow', Math.floor(Math.random() * 10))

            //sending books to inventory
            store_inventory.setBooks = newBook
            //sending temporaly books to the array
            totalBooksByGenre.push(newBook)
            id += 1
          }
          showBooks(totalBooksByGenre, key)
        }
      }

      /* console.log(store_inventory.totalbooks); */

    }

    //Connects to API and brings the books data
    public async getData() {
      const data: Response = await fetch('https://juesgape.github.io/booksAPI/data.json')
      const books: Object = await data.json()

      this.createBook(books)
    }

}

export {
  GetBooks
}
