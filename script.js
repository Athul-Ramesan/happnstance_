const footerLink=document.querySelector('.footer-link-head-1');

const footerDetails=document.querySelectorAll('.footer-text-1');

footerLink.addEventListener('click',()=>{
    footerDetails.forEach((element,index)=>{
        element.classList.toggle('active')
    })
})
const toTop=document.querySelector('.to-top');
window.addEventListener("scroll",()=>{
    if(window.pageYOffset>100)   
})