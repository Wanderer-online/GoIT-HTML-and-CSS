(()=>{
document
.querySelector('.modal__content')
.addEventListener('submit', e=>{
e.preventDefault();
new FormData(e.currentTarget).forEach((value,name)=> console.log(`${name}: ${value}`),
);
});})();
