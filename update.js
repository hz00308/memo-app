window.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(location.search);
    const index = parseInt(params.get('index'));
    
    const memos = JSON.parse(localStorage.getItem('memos'));
    const memo = memos[index];

    document.getElementById('memo-title').value = memo.title;
    document.getElementById('memo-body').value = memo.body;

    const saveBtn = document.getElementById('button-update');
    saveBtn.addEventListener('click', function() {
        memo.title = document.getElementById('memo-title').value;
        memo.body = document.getElementById('memo-body').value;
        memos[index] = memo;
        localStorage.setItem('memos', JSON.stringify(memos));
        location.href = `detail.html?index=${index}`;
    });

    const backBtn = document.getElementById('button-back');
    backBtn.addEventListener('click', function() {
        location.href = `detail.html?index=${index}`;
    });
});



