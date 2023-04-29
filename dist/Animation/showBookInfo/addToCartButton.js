import { orderList } from "../../Orderlist/Orderlist.js";
import { Order } from "../../Order/Order.js";
import { user } from "../../selectFav.js";
import { displayCart } from "../Cart/displayCart.js";
class AddToCartButton {
    deleteIcon;
    plusIcon;
    book;
    addToCart;
    //This will be the order per book
    _order = {};
    _cartFragment;
    constructor(deleteIcon, plusIcon, book, addToCart) {
        this.deleteIcon = deleteIcon;
        this.plusIcon = plusIcon;
        this.book = book;
        this.addToCart = addToCart;
    }
    set cartFragment(obj) {
        this._cartFragment = obj;
    }
    set order(newOrder) {
        this._order = newOrder;
    }
    get cartFragment() {
        return this._cartFragment;
    }
    get order() {
        return this._order;
    }
    showIcons(book, addToCartButtonObj) {
        if (book.stock === 0) {
            this.addToCart.style.color = 'red';
            this.addToCart.style.background = 'none';
            this.addToCart.innerHTML = 'Sold Out';
            return;
        }
        /* console.log(orderList.orders)
        console.log(book.totalBookInPurchase); */
        this.deleteIcon.classList.remove('hide');
        this.plusIcon.classList.remove('hide');
        //here, we will create the order
        const newOrder = new Order();
        newOrder.addToCartButton = this;
        newOrder.makeOrder(user, book);
        this.order = newOrder;
        //Adding the order to the listOrder
        orderList.addOrders(newOrder, addToCartButtonObj);
        //adding quantity to the order
        this.addCartTotal();
        //Then, we keep showing the information
        this.addToCart.innerHTML = `${this.order.quantity}/${book.stock}`;
        //Setting total and subtotal of the orders
        displayCart.setSubTotal();
        displayCart.setTotal();
        //checking if there are orders left
        displayCart.showCartContent();
    }
    addCartTotal() {
        let cartNumberContainer = document.querySelector('.cart-number-container');
        cartNumberContainer?.classList.remove('hide');
        // Get the span element by ID
        const numberCart = document.querySelector('#number-cart');
        // If the span element was not found, return or do something else
        if (!numberCart) {
            return;
        }
        // Get the current value of the span element and convert it to a number
        let numberCartValue = parseInt(numberCart.innerText);
        // Increment the value by 1 and set it back to the span element
        numberCart.innerText = (numberCartValue + 1).toString();
    }
    subsCartTotal() {
        let cartNumberContainer = document.querySelector('.cart-number-container');
        // Get the span element by ID
        const numberCart = document.querySelector('#number-cart');
        // If the span element was not found, return or do something else
        if (!numberCart) {
            return;
        }
        // Get the current value of the span element and convert it to a number
        let numberCartValue = parseInt(numberCart.innerText);
        if (numberCartValue === 1) {
            cartNumberContainer?.classList.add('hide');
            numberCart.innerText = (numberCartValue - 1).toString();
        }
        else {
            numberCart.innerText = (numberCartValue - 1).toString();
        }
    }
    addMoreBooks(book) {
        if (this.order.quantity < book.stock) {
            this.order.quantity = 1;
            /* console.log(`Total book in purchse: ${book.totalBookInPurchase}`); */
            this.addToCart.innerHTML = `${this.order.quantity}/${book.stock}`;
            this.cartFragment.updateQuantity();
        }
    }
    removeBook(book) {
        console.log(this.order);
        if (this.order.quantity > 0) {
            this.order.quantity = -1;
            this.addToCart.innerHTML = `${this.order.quantity}/${book.stock}`;
            this.cartFragment.updateQuantity();
        }
        if (this.order.quantity === 0) {
            this.plusIcon.classList.add('hide');
            this.deleteIcon.classList.add('hide');
            this.addToCart.innerHTML = 'Add to Cart';
            this.subsCartTotal();
            //remove element from orderList
            orderList.removeOrders(this.order);
            this.cartFragment.deleteFragment();
            //check if there are orders left
            displayCart.showCartContent();
        }
    }
    resetButton() {
        this.plusIcon.classList.add('hide');
        this.deleteIcon.classList.add('hide');
        this.addToCart.innerHTML = 'Add to Cart';
        this.subsCartTotal();
        this.cartFragment.deleteFragment();
        //check if there are orders left
        displayCart.showCartContent();
    }
}
export { AddToCartButton };
