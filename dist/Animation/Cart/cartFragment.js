import { displayCart } from "./displayCart.js";
class CartFragment {
    _fragmentId;
    _quantityTextElm;
    _plusIcon;
    _subsIcon;
    _order;
    _addToCartButton;
    _bookTotal;
    constructor(_fragmentId, _quantityTextElm, _plusIcon, _subsIcon, _order, _addToCartButton, _bookTotal) {
        this._fragmentId = _fragmentId;
        this._quantityTextElm = _quantityTextElm;
        this._plusIcon = _plusIcon;
        this._subsIcon = _subsIcon;
        this._order = _order;
        this._addToCartButton = _addToCartButton;
        this._bookTotal = _bookTotal;
    }
    get order() {
        return this._order;
    }
    get fragmentId() {
        return this._fragmentId;
    }
    get addToCartButton() {
        return this._addToCartButton;
    }
    set bookTotal(newTotal) {
        this._bookTotal.innerHTML = newTotal;
    }
    set quantityTextElm(newValue) {
        this._quantityTextElm.innerHTML = newValue;
    }
    plusIconFunction() {
        this._plusIcon.addEventListener('click', () => {
            //controlling the quantity they can shipt/ship however the hell you write that
            if (this.order.quantity < this.order.book.stock) {
                //updating addToCartButton
                this.addToCartButton.addMoreBooks(this.order.book);
                this._quantityTextElm.innerHTML = this.order.quantity.toString();
            }
        });
    }
    subsIconFunction() {
        this._subsIcon.addEventListener('click', () => {
            //We don't want negative values, do we?
            if (this.order.quantity >= 1) {
                //updating addToCartButton
                this.addToCartButton.removeBook(this.order.book);
                this._quantityTextElm.innerHTML = this.order.quantity.toString();
            }
        });
    }
    updateQuantity() {
        this.quantityTextElm = this.order.quantity.toString();
        this.bookTotal = (this.order.quantity * this.order.book.price).toLocaleString();
        //showing total and subtotal
        displayCart.setSubTotal();
        displayCart.setTotal();
    }
    deleteFunction() {
        // Add event listener to the delete button
        const deleteBtn = document.querySelector(`#${this.fragmentId} .delete-book-button`);
        deleteBtn.addEventListener('click', () => {
            // Find the product-info container element using the unique identifier
            const productInfoContainer = document.querySelector(`#${this.fragmentId}`);
            if (productInfoContainer) {
                // Find the book-quantity element inside the product-info container and remove it
                const bookQuantityContainer = productInfoContainer.querySelector('.book-quantity');
                if (bookQuantityContainer) {
                    bookQuantityContainer.remove();
                }
                // Remove the product-info container element from the DOM
                productInfoContainer.remove();
            }
            //setting order.quantity to 0 since we deleted the order
            this.order.resetQuantity();
            //updating the subtotal and total value
            displayCart.setSubTotal();
            displayCart.setTotal();
            //checking if there are orders left
            displayCart.showCartContent();
        });
    }
    deleteFragment() {
        // Find the product-info container element using the unique identifier
        const productInfoContainer = document.querySelector(`#${this.fragmentId}`);
        if (productInfoContainer) {
            // Find the book-quantity element inside the product-info container and remove it
            const bookQuantityContainer = productInfoContainer.querySelector('.book-quantity');
            if (bookQuantityContainer) {
                bookQuantityContainer.remove();
            }
            // Remove the product-info container element from the DOM
            productInfoContainer.remove();
        }
    }
}
export { CartFragment };
