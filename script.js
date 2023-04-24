const close = document.querySelector(".close");
const nav = document.querySelector(".navbar");

if(close){
    close.addEventListener('click',() =>{
        if(nav.classList.contains('drop_navbar')){
            nav.classList.remove('drop_navbar')
        }else{
            nav.classList.add('drop_navbar')
        }

        
        
        
    })
}