import { checkAuth, logout } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.querySelector('.logout');

logoutButton.addEventListener('click', () => {
    logout();
});

const home = document.getElementById('home');
home.addEventListener('click', () => {
    location.replace('/');
});
