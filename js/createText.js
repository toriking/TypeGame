const createText = document.getElementById('create-text');
const enter = document.getElementById('enter');
const retext = document.getElementById('retext');
const text = document.getElementById('text');
const back = document.querySelector('.back')
createText.classList.add('show');
const entext ='abcdefghijklmnpoqrstuvvwxyzABCDEFGHIJKLMNPOQRSTUVVWXYZ0123456789';
const jatext = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん';


// let ccc = createText.textContent = Math.random().toString(32).substring(2)

// 生成する文字列の長さ
var l = 8;

// 生成する文字列に含める文字セット
var c = "abcdefghijklmnopqrstuvwxyz0123456789";

var cl = c.length;
create()
function create(){
    createText.textContent =''  
    for(var i=0; i<l; i++){
        createText.textContent += c[Math.floor(Math.random()*cl)];
    }
}
function check(){
    
    if(createText.textContent == text.value){
        console.log('uu');
        text.value = '';
        create();
        count();
    } else{
        console.log('yy');
    }
}
// div生成
const scoreboard = document.createElement('div');
scoreboard.classList.add('count')
back.appendChild(scoreboard);
// スコアボード設定
let score= 0, quizset = 15;
scoreboard.textContent =  score  + '/' + quizset ;
function count(){
    // 1があることで0から始まらず1からカウントできる
    scoreboard.textContent = 1 + score  + '/' + quizset;
    score++
}

retext.addEventListener('click', ()=>{
    create()
})
document.addEventListener('keydown',(e)=>{
    var k = e.key
    if(k <= 9 || k >='a'){
        text.value += k

    }
    
    if(e.key === 'Enter'){
        check();
    }

})
enter.addEventListener('click',()=>{
    check()
})