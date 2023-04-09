import { GetBooks } from '../Getbooks/Getbooks.js';
import { LocalData } from '../LocalData/LocalData.js';
import { Client } from '../User/Client.js';
import { getBackToBooks, sumCartNumber, subsCartNumber } from './bookInfo.js';
const userName = document.querySelector('.userName');
let localInfo = new LocalData();
let userData = localInfo.getUser();
export let user = new Client(userData.email, userData.userName, userData.type);
let userNameDisplay = user.getName;
userName.innerHTML = userNameDisplay;
const likesContainer = document.querySelector('.likes-container');
const buttonsLikes = Array.from(document.querySelectorAll('.btn'));
const sendLikesBtn = document.querySelector('#send-likes-btn');
//how many books have they reacted to?
let elementsSelected = [];
buttonsLikes.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent?.trim();
        if (button.getAttribute('id') === 'btn-selected') {
            button.removeAttribute('id');
            const index = elementsSelected.indexOf(buttonText);
            if (index !== -1) {
                elementsSelected.splice(index, 1);
            }
        }
        else {
            if (elementsSelected.length === 5) {
                console.warn('No puedes seleccionar más de 5 géneros');
            }
            else {
                button.setAttribute('id', 'btn-selected');
                elementsSelected.push(buttonText);
                console.log(elementsSelected);
            }
        }
    });
});
//send likes button
sendLikesBtn?.addEventListener('click', async () => {
    if (elementsSelected.length < 3) {
        console.warn('You must select at least more than 2 books');
    }
    else {
        user.setLikes = elementsSelected;
        console.log(user.getUserLikes);
        likesContainer?.classList.add('hide');
        let getBooks = new GetBooks();
        getBooks.getData();
    }
});
//Showing books
export const createBookCategory = (category) => {
    const bookSection = document.querySelector('.book-section');
    let divCategory = document.createElement('div');
    divCategory.innerHTML = `
  <div class="category">
  <div class="category-name">
    <h3 class="category-title">${category}</h3>
  </div>
  <div class="book-container-${category} book-container">


  </div>
</div>
  `;
    bookSection.appendChild(divCategory);
};
export const showBooks = (books, genre) => {
    const bookContainer = document.querySelector(`.book-container-${genre}`);
    // Clear previous book data
    bookContainer.innerHTML = '';
    // Loop through each book and create a card for it
    books.forEach((book) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        const bookTitle = document.createElement('h3');
        bookTitle.classList.add('book-title');
        bookTitle.textContent = book.title;
        bookCard.appendChild(bookTitle);
        const bookImg = document.createElement('img');
        bookImg.src = book.img;
        bookImg.alt = book.title + ' cover';
        bookCard.appendChild(bookImg);
        const bookAuthor = document.createElement('p');
        bookAuthor.classList.add('book-author');
        bookAuthor.textContent = 'By: ' + book.author;
        bookCard.appendChild(bookAuthor);
        const bookPrice = document.createElement('p');
        bookPrice.classList.add('book-price');
        bookPrice.textContent = '$' + Math.floor(Math.random() * 500000).toLocaleString();
        bookCard.appendChild(bookPrice);
        const bookButtons = document.createElement('div');
        bookButtons.classList.add('book-buttons');
        const moreInfoButton = document.createElement('button');
        moreInfoButton.classList.add('buy-button');
        moreInfoButton.textContent = 'View more info';
        bookButtons.appendChild(moreInfoButton);
        const cartButton = document.createElement('button');
        cartButton.classList.add('cart-button');
        const buttonContent = document.createElement('div');
        buttonContent.classList.add('button-content');
        // Add SVG icon to the cart button
        const deleteIcon = document.createElement('span');
        deleteIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v32c0 26.51 21.49 48 48 48h16.971l34.417 323.276C103.696 493.386 126.864 512 153.56 512h140.88c26.696 0 49.864-18.614 54.172-44.724L382.029 160H399.999c26.51 0 48-21.49 48-48v-32c0-26.51-21.49-48-48-48zm-40.276 64l-23.53 224H111.806l-23.529-224H359.724z"/></svg>';
        deleteIcon.classList.add('hide');
        buttonContent.appendChild(deleteIcon);
        const buttonText = document.createElement('span');
        buttonText.textContent = 'Add to Cart';
        buttonContent.appendChild(buttonText);
        const plusIcon = document.createElement('span');
        plusIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 240H272V96c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v144H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h112v144c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V336h144c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32z"/></svg>';
        plusIcon.classList.add('hide');
        buttonContent.appendChild(plusIcon);
        cartButton.appendChild(buttonContent);
        bookButtons.appendChild(cartButton);
        bookCard.appendChild(bookButtons);
        bookContainer.appendChild(bookCard);
        //ading eveent listeners to the books
        //moreInfo button
        moreInfoButton.addEventListener('click', () => {
            let bookInfoContainer = document.querySelector('.book-info-container');
            bookInfoContainer?.classList.remove('hide');
            let mainContainer = document.querySelector('.main-container');
            let header = window.parent.document.querySelector('header');
            header.classList.add('blur');
            mainContainer.classList.add('blur');
            getBackToBooks(book);
        });
        //addToCart Button
        // Add event listener to cart button
        buttonText.addEventListener('click', showIcons);
        function showIcons() {
            // Show delete and plus icons
            deleteIcon.classList.remove('hide');
            plusIcon.classList.remove('hide');
            buttonText.innerHTML = `1/${book.stock} available`;
            sumCartNumber();
            cartButton.style.backgroundColor = 'white';
            cartButton.style.color = '#333';
            cartButton.style.border = '2px solid #333';
            // Remove event listener from cart button
            buttonText.removeEventListener('click', showIcons);
            // Add event listener to delete icon
            deleteIcon.addEventListener('click', hideIcons);
            plusIcon.addEventListener('click', addItem);
        }
        function hideIcons() {
            // Hide delete and plus icons
            deleteIcon.classList.add('hide');
            plusIcon.classList.add('hide');
            subsCartNumber();
            cartButton.style.backgroundColor = '#333';
            cartButton.style.color = 'white';
            cartButton.style.border = '2px solid white';
            // Remove event listener from delete icon
            deleteIcon.removeEventListener('click', hideIcons);
            // Add event listener to cart button
            buttonText.addEventListener('click', showIcons);
        }
        function addItem() {
        }
    });
};
