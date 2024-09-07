
function startLop(){

    const word = document.querySelector('#word').value
    const num = parseInt(document.querySelector('#put').value);
    window.location.href = 'next.html';

    document.getElementById('output').innerHTML=''

    if(isNaN(num) || word === ''){
        alert('iltimos qiymani kiritin')
        return
    }
        let output = '';
        for (let i = 0; i < num; i++) {
            output += `<div class="word-item">${word}</div>` ;
        }
    
        document.getElementById('output').innerHTML = output;
        localStorage.setItem('word', word);
        localStorage.setItem('num', num);
}