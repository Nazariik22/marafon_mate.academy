let burger = document.querySelector('.burger');
let close = document.querySelector("#close");
let liArr=Array.from(document.querySelectorAll('.list'));
let menu = document.querySelector('.menu');
burger.addEventListener('click',(event)=>{
  menu.classList.add('menu_active');
  
})
window.addEventListener('click',(event)=>{
  if(event.target===close) {
    menu.classList.remove('menu_active');
  };
  
  
})
liArr.forEach((item)=>{
  item.addEventListener('click',(event)=>{
    
    if(event.target==item.children[0]) {
      menu.classList.remove('menu_active');
    };
    
    
  })
})