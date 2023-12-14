const hashedId = window.location.hash;
const id = hashedId.replace('#', '');
const posts = JSON.parse(localStorage.getItem('posts'));


function findPost(){
    const postInfo = posts.find(post => post.id === id);

    const h1 = document.querySelector('h1');
    const p = document.querySelector('p');

    h1.innerHTML = postInfo.title;
    p.innerHTML = postInfo.description;

}

function init(){
    findPost();
}

init();