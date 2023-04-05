import { GetBooks } from './Getbooks/Getbooks.js';
import { LocalData } from './LocalData/LocalData.js';
import { Client } from './User/Client.js';
import { getBackToBooks } from './Animation/bookInfo.js';
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
        cartButton.textContent = 'Add to Cart';
        bookButtons.appendChild(cartButton);
        bookCard.appendChild(bookButtons);
        bookContainer.appendChild(bookCard);
        //ading eveent listener to the books
        moreInfoButton.addEventListener('click', () => {
            let bookInfoContainer = document.querySelector('.book-info-container');
            bookInfoContainer?.classList.remove('hide');
            let mainContainer = document.querySelector('.main-container');
            let header = window.parent.document.querySelector('header');
            header.classList.add('blur');
            mainContainer.classList.add('blur');
            getBackToBooks(book);
        });
    });
};
