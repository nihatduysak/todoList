const ulList = document.querySelector('.postList');
const posts = localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : [];
function renderHtml(){
    ulList.innerHTML = '';
    for(const post of posts){
        ulList.innerHTML += `<li>
            <a href="detay.html#${post.id}">${post.title}</a>
            <button class="delete" data-id="${post.id}">Sil</button>
            <a href="duzenle.html#${post.id}">Düzenle</a>
        </li>`;
    }
}

function bindDeleteBtn(){
    const deleteButtons = document.querySelectorAll('.delete');

    deleteButtons.forEach(button=>{
        button.addEventListener('click',deletePost);
    })

}

function deletePost(){
    const postId = this.dataset.id;
    posts.find((post,index)=>{
        if(post.id === postId){
            posts.splice(index,1);
        }
    })

    localStorage.setItem('posts',JSON.stringify(posts));
    renderHtml();

    //
    // const selectedBtn = document.querySelector(`.delete[data-id="${postId}"]`);
    // selectedBtn.parentElement.remove();

}


function init(){
    renderHtml();
    bindDeleteBtn();
}

init();