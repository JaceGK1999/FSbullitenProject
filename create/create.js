import { checkAuth, logout, createPost } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.querySelector('.logout');

logoutButton.addEventListener('click', () => {
    logout();
});

// const home = document.getElementById('home');
// home.addEventListener('click', () => {
//     location.replace('/');
// });

const postItForm = document.getElementById('post-it-form');
postItForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(postItForm);
    await createPost({
        title: data.get('title'),
        description: data.get('description'),
        contact: data.get('contact'),
    });
    location.replace('/');
});
