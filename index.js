let count = 0;
let h2 = document.getElementById('count');
let btn = document.getElementById('increase');
let btn2 = document.getElementById('decrease');
let btn3 = document.getElementById('save');

h2.innerHTML = count;

btn.addEventListener('mousedown', function add(){
    ++count
    h2.innerHTML = count;
})

btn2.addEventListener('mousedown', function remove(){
    --count
    h2.innerHTML = count;
})

btn3.addEventListener('mousedown', function save(){
    h2.innerHTML = count;
    console.log(count);
})