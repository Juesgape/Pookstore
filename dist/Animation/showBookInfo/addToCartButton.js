class AddToCartButton {
    showIcons(addToCart, deleteIcon, plusIcon, book) {
        if (book.stock === 0) {
            console.log('Sold out', book.stock);
            addToCart.style.color = 'red';
            addToCart.style.background = 'none';
            addToCart.innerHTML = 'Sold Out';
            return;
        }
        addToCart.innerHTML = `${book.totalBookInPurchase}/${book.stock}`;
        if (book.totalBookInPurchase === 0) {
            this.addMoreBooks(addToCart, book);
            this.addCartTotal();
        }
        deleteIcon.classList.remove('hide');
        plusIcon.classList.remove('hide');
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
            return;
        }
    }
    addMoreBooks(totalBooks, book) {
        if (book.totalBookInPurchase < book.stock) {
            book.totalBookInPurchase = 1;
            totalBooks.innerHTML = `${book.totalBookInPurchase}/${book.stock}`;
        }
    }
    removeBook(totalBooks, book, plusIcon, deleteIcon) {
        if (book.totalBookInPurchase > 0) {
            book.totalBookInPurchase = -1;
        }
        if (book.totalBookInPurchase === 0) {
            plusIcon.classList.add('hide');
            deleteIcon.classList.add('hide');
            totalBooks.innerHTML = 'Add to Cart';
        }
        else {
            totalBooks.innerHTML = `${book.totalBookInPurchase}/${book.stock}`;
        }
    }
}
export { AddToCartButton };
