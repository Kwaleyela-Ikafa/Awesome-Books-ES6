import { BookData, button, titleInput, authorInput, Storage} from './storage.js';
import { Book, UI, ui } from "./UI.js";
import {addBook, removeBook} from './addBook.js'

const addNew = document.querySelector('.add-new');
const form = document.querySelector('.form');

const list = document.querySelector('.list');
const listDiv = document.querySelector('.list-div');

const contact = document.querySelector('.contact');
const contactDiv = document.querySelector('.contact-info-div');

addNew.addEventListener('click', () => {
  form.style.display = 'unset';
  listDiv.style.display = 'none';
  contactDiv.style.display = 'none';
});

list.addEventListener('click', () => {
  form.style.display = 'none';
  listDiv.style.display = 'unset';
  contactDiv.style.display = 'none';
});

contact.addEventListener('click', () => {
  form.style.display = 'none';
  listDiv.style.display = 'none';
  contactDiv.style.display = 'unset';
});

// eslint-disable-next-line no-unused-expressions
window.onload;
listDiv.style.display = 'unset';

export { addNew, form, list, listDiv, contact, contactDiv};