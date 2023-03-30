import { LocalData } from './LocalData/LocalData.js';
import { Client } from './User/Client.js';
import { GetBooks } from './Getbooks/Getbooks.js';
const userName = document.querySelector('.userName');
let localInfo = new LocalData();
let userData = localInfo.getUser();
let user = new Client(userData.email, userData.userName, userData.type);
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
sendLikesBtn?.addEventListener('click', () => {
    if (elementsSelected.length < 3) {
        console.warn('You must select at least more than 2 books');
    }
    else {
        user.setLikes = elementsSelected;
        console.log(user.getUserLikes);
        likesContainer?.classList.add('hide');
        let scrapingBooks = new GetBooks();
        scrapingBooks.getFavoriteLinks(user.getUserLikes);
        /* scrapingBooks.getData() */
    }
});
