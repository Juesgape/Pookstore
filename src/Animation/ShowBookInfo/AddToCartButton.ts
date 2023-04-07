import { Book } from "src/Book/Book";

class AddToCartButton {

  public showIcons(addToCart: HTMLElement, deleteIcon: HTMLElement, plusIcon: HTMLElement, book: Book) {

    if(book.stock === 0) {
      console.log('Sold out', book.stock)
      addToCart.style.color = 'red'
      addToCart.style.background = 'none'
      addToCart.innerHTML = 'Sold Out'
      return
    }

    if(book.totalBookInPurchase < 1 && book.totalBookInPurchase > -1) {
      book.totalBookInPurchase = 1
    }

    addToCart.innerHTML = `${book.totalBookInPurchase}/${book.stock}`

    plusIcon.addEventListener('click', () => {
      this.addMoreBooks(addToCart, book)
    })

    deleteIcon.addEventListener('click', () => {
      this.removeBook(addToCart, book, plusIcon, deleteIcon)
    })

    deleteIcon.classList.remove('hide');
    plusIcon.classList.remove('hide');
  }

  public addMoreBooks(totalBooks: HTMLElement, book: Book) {

    if(book.totalBookInPurchase < book.stock) {
      book.totalBookInPurchase = 1
      totalBooks.innerHTML = `${book.totalBookInPurchase}/${book.stock}`
    }

  }

  public removeBook(totalBooks: HTMLElement, book: Book, plusIcon: HTMLElement, deleteIcon: HTMLElement) {

    if(book.totalBookInPurchase === 1) {
      plusIcon.classList.add('hide')
      deleteIcon.classList.add('hide')
      book.totalBookInPurchase = -1
      console.log(`Total books in purchase ${book.totalBookInPurchase}`)
      totalBooks.innerHTML = 'Add to Cart'
      return
    }

    book.totalBookInPurchase = -1
    totalBooks.innerHTML = `${book.totalBookInPurchase}/${book.stock}`
    console.log(`Total books in purchase ${book.totalBookInPurchase}`)

  }

}

export {
  AddToCartButton
}
