window.addEventListener('DOMContentLoaded', function() {
    const memoListDiv = document.getElementById('memo-list');
    const memos = JSON.parse(localStorage.getItem('memos')) || [];
    memos.forEach(function(memo, index){
        const memoDiv = document.createElement('div');
        memoDiv.classList.add('memo-item');

        const title = document.createElement('h3');
        title.classList.add('view-title');
        title.innerText = memo.title;

        const body = document.createElement('p');
        body.classList.add('view-body');
        body.innerText = memo.body;

        memoDiv.appendChild(title);
        memoDiv.appendChild(body);
        memoDiv.addEventListener('click', function() {
            location.href = `detail.html?index=${index};`
        });

        memoListDiv.appendChild(memoDiv);
    });
});