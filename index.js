const buyBtns = document.querySelectorAll(".js-buy-ticket")
const closeIconBtn = document.querySelector('.js-modal-close')
const closeBtn = document.querySelector('.js-modal-footer-close')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')

function showBuyTickets(){
    modal.classList.add('open-modal')
}

function closeTicketModal(){
    modal.classList.remove('open-modal')
}

for (const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyTickets)
}
closeIconBtn.addEventListener('click', closeTicketModal)
closeBtn.addEventListener('click', closeTicketModal)
modal.addEventListener('click', closeTicketModal)
modalContainer.addEventListener('click', function(event){
    event.stopPropagation()
})