const createText = document.getElementById('create-text');
const enter = document.getElementById('enter');
const retext = document.getElementById('retext');
// const text = document.getElementById('text');
const back = document.querySelector('.back')
createText.classList.add('show');
const entext ='abcdefghijklmnpoqrstuvvwxyzABCDEFGHIJKLMNPOQRSTUVVWXYZ0123456789';
const jatext = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん';


let ccc = createText.textContent = Math.random().toString(32).substring(2)

function check(){
    if(createText.textContent == text.textContent){
        console.log('uu');
        create();
        count();
    } else{
        console.log('yy');
    }
}
let aa= 0, bb= 15;
const counttext = document.createElement('div');
counttext.classList.add('count')
counttext.textContent = aa + '/' + bb;
back.appendChild(counttext);




retext.addEventListener('click', ()=>{
    create()
})
enter.addEventListener('keydown',()=>{
    if(e.keycode === 7){
        check();
    }
})
enter.addEventListener('click',()=>{
    check()
})