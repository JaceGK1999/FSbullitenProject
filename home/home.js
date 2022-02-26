import { checkAuth, logout, getPosts } from '../fetch-utils.js';
import { renderPostIt } from '../renderUtils.js';
checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

// const home = document.getElementById('home');
// home.addEventListener('click', () => {
//     location.replace('/');
// });

const bulletin = document.getElementById('bulletin-board');

window.addEventListener('load', async () => {
    const posts = await getPosts();
    for (let post of posts) {
        const postDiv = renderPostIt(post);
        bulletin.append(postDiv);
    }
});
