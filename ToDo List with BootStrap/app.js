addForm = document.querySelector('#add-form');
searchForm = document.querySelector('form.search');
ul = document.querySelector('ul');
trashIcon = document.querySelector('i.delete');

const generateTemplate = todo => `<li class="list-group-item d-flex justify-content-between align-items-center">
<span>${todo}</span>
<i class="far fa-trash-alt delete"></i>
</li>`;

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = e.target.add.value.trim();
    
     if (todo != '' || /^[ ]+$/.test(todo)) {
        ul.innerHTML += generateTemplate(todo);
        // e.target.add.value = '';
        addForm.reset();
    }
});

ul.addEventListener('click', e => {
    if (e.target.tagName == 'I') {
        e.target.parentElement.remove();
    }
});

searchForm.addEventListener('keyup', e => {
    const val = searchForm.search.value.toLowerCase().trim();
    items = ul.children;

    for (let i = 0; i < items.length; ++i) {
        if (!items[i].innerText.toLowerCase().includes(val)) {
            items[i].classList.add('filtered');
        }
    }

    for (let i = 0; i < items.length; ++i) {
        if (items[i].innerText.toLowerCase().includes(val)) {
            items[i].classList.remove('filtered');
        }
    }
});