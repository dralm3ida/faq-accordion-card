const faqItemsLink = document.querySelectorAll(".faq-item-link");

faqItemsLink.forEach(item => {

   const fapItem = item.parentElement;

   item.addEventListener('click', event => {
      fapItem.classList.toggle('open');
   })
})