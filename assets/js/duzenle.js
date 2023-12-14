const posts = JSON.parse(localStorage.getItem('posts'));
const hashedId = window.location.hash.substring(1);
const postInfo = posts.find(post => post.id === hashedId);

const postIndex = posts.findIndex(post => post.id === hashedId);



const titleInput = document.querySelector('input[name="title"]');
const descInput = document.querySelector('input[name="description"]');

titleInput.value = postInfo.title;
descInput.value = postInfo.description;

const editBtn = document.querySelector('.duzenleBtn');
editBtn.addEventListener('click', update);

function update(){
    const form = document.querySelector('.duzenleForm');
    const formData = new FormData(form);
    const objData = Object.fromEntries(formData);

    objData.id = hashedId;
    posts[postIndex] = objData;


    localStorage.setItem('posts',JSON.stringify(posts));

    window.location.href = 'index.html';
}

