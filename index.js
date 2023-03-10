let count = 0;
let h2 = document.getElementById('count');
let btn = document.getElementById('increase');
let btn2 = document.getElementById('decrease');
let btn3 = document.getElementById('save');
let saved = document.getElementById('saving');
let comma = ","
let storage = []

h2.innerHTML = count;

btn.addEventListener('mousedown', function add(){
    ++count
    h2.innerHTML = count;
})

btn2.addEventListener('mousedown', function remove(){
    if (count > 0){
        --count
        h2.textContent = count;
    }
    else{
        alert("People cannot be Negative :)")
    }
    
})

btn3.addEventListener('mousedown', function save(){
    h2.innerHTML = count;
    storage.push(count)
    console.log(storage);
    h2.textContent = 0;
    count = 0
    //saved.append(count,comma);
    saved.innerText = "Record: " + storage;
})