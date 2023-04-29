import { orderList } from "../../Orderlist/Orderlist.js";
import { Book } from "../../Book/Book.js";
import { Order } from "../../Order/Order.js";
import { user } from "../../selectFav.js";
import { displayCart } from "../Cart/displayCart.js";
import { CartFragment } from "../Cart/cartFragment.js";

class AddToCartButton {
  //This will be the order per book
  private _order: Object = {}
  private _cartFragment!: CartFragment
  constructor(
    private deleteIcon: HTMLElement,
    private plusIcon: HTMLElement,
    private book: Book,
    private addToCart: HTMLElement

  ) {
  }

  set cartFragment(obj: CartFragment) {
    this._cartFragment = obj
  }

  set order(newOrder: any) {
    this._order = newOrder
  }

  get cartFragment(): CartFragment {
    return this._cartFragment
  }

  get order() {
    return this._order
  }

  public showIcons(book: Book, addToCartButtonObj: AddToCartButton) {

    if(book.stock === 0) {
      this.addToCart.style.color = 'red'
      this.addToCart.style.background = 'none'
      this.addToCart.innerHTML = 'Sold Out'
      return
    }

    /* console.log(orderList.orders)
    console.log(book.totalBookInPurchase); */


    this.deleteIcon.classList.remove('hide');
    this.plusIcon.classList.remove('hide');

    //here, we will create the order
    const newOrder = new Order()
    newOrder.addToCartButton = this
    newOrder.makeOrder(user, book)
    this.order = newOrder
    //Adding the order to the listOrder
    orderList.addOrders(newOrder, addToCartButtonObj)

    //adding quantity to the order
    this.addCartTotal()

    //Then, we keep showing the information
    this.addToCart.innerHTML = `${this.order.quantity}/${book.stock}`

    //Setting total and subtotal of the orders
    displayCart.setSubTotal()
    displayCart.setTotal()

    //checking if there are orders left
    displayCart.showCartContent()

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

  public addMoreBooks(book: Book) {
    if(this.order.quantity < book.stock) {
      this.order.quantity = 1;
      /* console.log(`Total book in purchse: ${book.totalBookInPurchase}`); */
      this.addToCart.innerHTML = `${this.order.quantity}/${book.stock}`
      this.cartFragment.updateQuantity()
    }
  }

  public removeBook(book: Book) {

    console.log(this.order)

    if(this.order.quantity > 0) {
      this.order.quantity = -1;
      this.addToCart.innerHTML = `${this.order.quantity}/${book.stock}`;
      this.cartFragment.updateQuantity()
    }

    if(this.order.quantity === 0) {
      this.plusIcon.classList.add('hide');
      this.deleteIcon.classList.add('hide');
      this.addToCart.innerHTML = 'Add to Cart';
      this.subsCartTotal()

      //remove element from orderList
      orderList.removeOrders(this.order)
      this.cartFragment.deleteFragment()

      //check if there are orders left
      displayCart.showCartContent()
    }
  }

  public resetButton() {
    this.plusIcon.classList.add('hide');
      this.deleteIcon.classList.add('hide');
      this.addToCart.innerHTML = 'Add to Cart';
      this.subsCartTotal()

      this.cartFragment.deleteFragment()

      //check if there are orders left
      displayCart.showCartContent()
  }

}

export {
  AddToCartButton
}
