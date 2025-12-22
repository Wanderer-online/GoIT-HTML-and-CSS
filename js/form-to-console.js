(()=>{
document
.querySelector('.modal-content')
.addEventListener('submit', e=>{
e.preventDefault();
new FormData(e.currentTarget).forEach((value,name)=> console.log(`${name}: ${value}`),
);
});
>)();
