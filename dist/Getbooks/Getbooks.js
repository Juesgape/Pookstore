/* import * as puppeteer from "puppeteer" */
import { Book } from "../Book/Book.js";
import { store_inventory } from "../Inventory/Inventory.js";
import { showBookInfo } from '../Animation/ShowBookInfo/ShowBookInfo.js';
import { user } from "../selectFav.js";
class GetBooks {
    _urls;
    _userFavGenresLinks;
    _booksAPI;
    constructor(_urls = [
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
    ], _userFavGenresLinks = [], _booksAPI = {}) {
        this._urls = _urls;
        this._userFavGenresLinks = _userFavGenresLinks;
        this._booksAPI = _booksAPI;
    }
    //GETTERS
    get booksAPI() {
        return `This is the main book Object ${this._booksAPI}`;
    }
    get urls() {
        return this._urls;
    }
    //SETTERS
    set booksAPI(newBooks) {
        this._booksAPI = newBooks;
    }
    firstWord(genre) {
        const result = [];
        for (let i = 0; i < genre.length; i++) {
            const words = genre[i].split(' ');
            result.push(words[0]);
        }
        return result;
    }
    createBook(books) {
        let id = 1;
        let userFavLinks = this.firstWord(user.getUserLikes);
        for (const key in books) {
            if (books.hasOwnProperty(key)) {
                //Checking if the genre is what the user wants
                if (!userFavLinks.includes(key)) {
                    continue;
                }
                const bookArray = books[key]; // I honestly dont know what to do with this XDXD
                //this will create a new category in the index HTML code
                showBookInfo.createBookCategory(key);
                //This will store all of our books by genre so that we can show them later on in out application
                let totalBooksByGenre = [];
                for (const book of bookArray) {
                    const genre = key;
                    //destructuring the book properties
                    const { title, author, description, img } = book;
                    //creating instances of the class Book
                    const newBook = new Book(id.toString(), title, author, description, img, genre, Math.floor(Math.random() * 500000), 'Unknow', Math.floor(Math.random() * 10));
                    //sending books to inventory
                    store_inventory.setBooks = newBook;
                    //sending temporaly books to the array
                    totalBooksByGenre.push(newBook);
                    id += 1;
                }
                showBookInfo.showBooksByCategory(totalBooksByGenre, key);
                let header = document.querySelector('header');
                header?.classList.remove('hide');
            }
        }
        /* console.log(store_inventory.totalbooks); */
    }
    //Connects to API and brings the books data
    async getData() {
        const data = await fetch('https://juesgape.github.io/booksAPI/data.json');
        const books = await data.json();
        this.createBook(books);
    }
}
export { GetBooks };
