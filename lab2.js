axios.get('https://jsonplaceholder.typicode.com/users ').then(item => {
let body = document.querySelector('body');
let ul = document.createElement('UL');
item.data.map(item => {
let li = document.createElement('LI');
li.innerHTML = item.title;
ul.appendChild(li);
})
body.appendChild(ul)
})