let view = document.querySelector('.view');
let check = document.querySelector('.check');

setInterval(function() {

    let code = document.querySelectorAll('.CodeMirror-line');
    let out = ''
    // code.forEach((item) => console.log(item))
    code.forEach((item) => {
        out += item.innerText;
    })
    view.innerHTML = out;

   if(view.querySelectorAll("h1, h2, h3, h4, h5, h6").length == 6){
        check.innerText = 'Молодец, все правильно!';
        check.classList.add('correct');
   } else {
    check.innerText = 'Неправильно, пробуй еще';
    check.classList.remove('correct');
   }
}, 1000)