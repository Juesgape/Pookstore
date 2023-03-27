import { LocalData } from './LocalData/LocalData.js';
import { Client } from './User/Client.js';
let localInfo = new LocalData();
let userData = localInfo.getUser();
let user = new Client(userData.email, userData.userName, userData.type);
const buttonsLikes = Array.from(document.querySelectorAll('.btn'));
//how many books have they reacted to?
let elementsSelected = [];
buttonsLikes.forEach(button => {
    button.addEventListener('click', () => {
        var _a;
        const buttonText = (_a = button.textContent) === null || _a === void 0 ? void 0 : _a.trim();
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
