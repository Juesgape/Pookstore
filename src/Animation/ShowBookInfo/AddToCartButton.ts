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

    addToCart.innerHTML = `${book.totalBookInPurchase}/${book.stock}`


    if(book.totalBookInPurchase === 0) {
      this.addMoreBooks(addToCart, book)
      this.addCartTotal()
    }
    deleteIcon.classList.remove('hide');
    plusIcon.classList.remove('hide');
  }

  public addCartTotal() {
    let cartNumberContainer = document.querySelector('.cart-number-container')
    cartNumberContainer?.classList.remove('hide')

    // Get the span element by ID
    const numberCart = document.querySelector('#number-cart') as HTMLSpanElement;

    // If the span element was not found, return or do something else
    if (!numberCart) {
      return;
    }

    // Get the current value of the span element and convert it to a number
    let numberCartValue = parseInt(numberCart.innerText);

    // Increment the value by 1 and set it back to the span element
    numberCart.innerText = (numberCartValue + 1).toString();

  }

  public subsCartTotal() {
    let cartNumberContainer = document.querySelector('.cart-number-container')

    // Get the span element by ID
    const numberCart = document.querySelector('#number-cart') as HTMLSpanElement;

    // If the span element was not found, return or do something else
    if (!numberCart) {
      return;
    }

    // Get the current value of the span element and convert it to a number
    let numberCartValue = parseInt(numberCart.innerText);

    if(numberCartValue === 1) {
      cartNumberContainer?.classList.add('hide')
      numberCart.innerText = (numberCartValue - 1).toString();
      return
    }

  }

  public addMoreBooks(totalBooks: HTMLElement, book: Book) {
    if(book.totalBookInPurchase < book.stock) {
      book.totalBookInPurchase = 1;
      totalBooks.innerHTML = `${book.totalBookInPurchase}/${book.stock}`
    }

  }

  public removeBook(totalBooks: HTMLElement, book: Book, plusIcon: HTMLElement, deleteIcon: HTMLElement) {

    if(book.totalBookInPurchase > 0) {
      book.totalBookInPurchase = -1;
    }

    if (book.totalBookInPurchase === 0) {
      plusIcon.classList.add('hide');
      deleteIcon.classList.add('hide');
      totalBooks.innerHTML = 'Add to Cart';
    } else {
      totalBooks.innerHTML = `${book.totalBookInPurchase}/${book.stock}`;
    }

  }
}

export {
  AddToCartButton
}
