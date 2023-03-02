'use Strict'
const modal = document.querySelector('.modal');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const btnOverLay = document.querySelector('.overlay')
for(let i= 0; i < btnShowModal.length; i++){
    btnShowModal[i].addEventListener('click', function(){
        modal.classList.remove('hidden');
        btnOverLay.classList.remove('hidden')
    })
    
}
const closeModal= function(){
    modal.classList.add('hidden');
    btnOverLay.classList.add('hidden')
}
btnCloseModal.addEventListener('click', closeModal);
btnOverLay.addEventListener('click', closeModal);
   
document.addEventListener(
    'keydown', function(e){
        if(e.key === 'Escape'){
            if(!modal.classList.contains('hidden')){
                closeModal()
            }
        }
    }
)