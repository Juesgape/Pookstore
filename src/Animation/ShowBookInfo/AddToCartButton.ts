import { orderList } from "../../Orderlist/Orderlist.js";
import { Book } from "../../Book/Book.js";
import { Order } from "../../Order/Order.js";
import { user } from "../../selectFav.js";

class AddToCartButton {
  //This will be the order per book
  private _order: Object = {}
  constructor() {
  }

  set order(newOrder: any) {
    this._order = newOrder
  }

  get order() {
    return this._order
  }

  public showIcons(addToCart: HTMLElement, deleteIcon: HTMLElement, plusIcon: HTMLElement, book: Book) {

    if(book.stock === 0) {
      addToCart.style.color = 'red'
      addToCart.style.background = 'none'
      addToCart.innerHTML = 'Sold Out'
      return
    }

    /* console.log(orderList.orders)
    console.log(book.totalBookInPurchase); */


    //Then, we keep showing the information
    addToCart.innerHTML = `${book.totalBookInPurchase}/${book.stock}`


    if(book.totalBookInPurchase === 0) {
      this.addMoreBooks(addToCart, book)
      this.addCartTotal()
    }
    deleteIcon.classList.remove('hide');
    plusIcon.classList.remove('hide');

    //here, we will create the order
    const newOrder = new Order
    newOrder.makeOrder(user, book)
    this.order = newOrder
    //Adding the order to the listOrder
    orderList.addOrders(newOrder)
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
    } else {
      numberCart.innerText = (numberCartValue - 1).toString()
    }

  }

  public addMoreBooks(totalBooks: HTMLElement, book: Book) {
    if(book.totalBookInPurchase < book.stock) {
      book.totalBookInPurchase = 1;
      console.log(`Total book in purchse: ${book.totalBookInPurchase}`);

      totalBooks.innerHTML = `${book.totalBookInPurchase}/${book.stock}`
    }
  }

  public removeBook(totalBooks: HTMLElement, book: Book, plusIcon: HTMLElement, deleteIcon: HTMLElement) {

    if(book.totalBookInPurchase > 0) {
      book.totalBookInPurchase = -1;
      totalBooks.innerHTML = `${book.totalBookInPurchase}/${book.stock}`;
    }

    if (book.totalBookInPurchase === 0) {
      plusIcon.classList.add('hide');
      deleteIcon.classList.add('hide');
      totalBooks.innerHTML = 'Add to Cart';
      this.subsCartTotal()

      //remove element from orderList
      orderList.removeOrders(this.order)
    }

  }
}

export {
  AddToCartButton
}
