window.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(location.search);
    const index = parseInt(params.get('index'));

    const memos = JSON.parse(localStorage.getItem('memos'));
    const memo = memos[index];

    const memoDiv = document.getElementById('memo-detail');

    const title = document.createElement('h2');
    title.classList.add('detail-title');
    title.innerText = memo.title;
    const body = document.createElement('p');
    body.classList.add('detail-body');
    body.innerText = memo.body;

    memoDiv.appendChild(title);
    memoDiv.appendChild(body);
});

const deleteBtn = document.getElementById('button-delete');
deleteBtn.addEventListener('click', function() {
    if(confirm('Delete this memo?')) {
        const params = new URLSearchParams(location.search);
        const index = parseInt(params.get('index'));
        const memos = JSON.parse(localStorage.getItem('memos'));
        memos.splice(index, 1);
        localStorage.setItem('memos', JSON.stringify(memos));
        location.href = 'read.html'
    }
});

const editBtn = document.getElementById('button-edit');
editBtn.addEventListener('click', function() {
    const params = new URLSearchParams(location.search);
    const index = params.get('index');
    location.href = `update.html?index=${index}`;
});