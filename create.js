const saveBtn = document.getElementById('button-save');
saveBtn.addEventListener('click', function() {
    const title = document.getElementById('memo-title');
    const body = document.getElementById('memo-body');
    const newMemo = {title: title.value, body: body.value};
    const memos = JSON.parse(localStorage.getItem('memos')) || [];
    memos.push(newMemo);
    localStorage.setItem('memos', JSON.stringify(memos));
    location.href = 'read.html';
});