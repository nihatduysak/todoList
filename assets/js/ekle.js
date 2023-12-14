const ekleBtn = document.querySelector('.ekleBtn');

const posts = localStorage.getItem('posts') ? JSON.parse(localStorage.getItem(('posts'))) : [];


ekleBtn.addEventListener('click',() => {
    const form = document.querySelector('.ekleForm');
    const formEntries = new FormData(form);
    const formValues = Object.fromEntries(formEntries);


    createLS(formValues);
    form.reset();
})


function createLS(formValues){
    formValues.id = crypto.randomUUID();
    posts.push(formValues);
    localStorage.setItem('posts',JSON.stringify(posts));
}

// CRUD İŞLEMLERİ
// CREATE +++
// READ
// UPDATE
// DELETE