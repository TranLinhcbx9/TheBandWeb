const buyBtns = document.querySelectorAll(".js-buy-ticket")
const closeIconBtn = document.querySelector('.js-modal-close')
const closeBtn = document.querySelector('.js-modal-footer-close')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
var header = document.getElementById('header')
var mobileMenu = document.getElementById('mobile-menu')
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')

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

var headerHeight = header.clientHeight;
mobileMenu.onclick = function(){
    var isClose = header.clientHeight === headerHeight;
    if(isClose){
        header.style.height = 'auto';
    }else{
        header.style.height = null;
    }
}

for (var i=0; i<menuItems.length; i++){
    var menuItem = menuItems[i];
    menuItem.onclick = function(event){
        if(!isParentMenu)
        {
            var isParentMenu = this.nextElementSibling && menuItem.nextElementSibling.classList.contains("subnav");
            header.style.height = null;
        } else{
            event.preventDefault();
        }
    }
}