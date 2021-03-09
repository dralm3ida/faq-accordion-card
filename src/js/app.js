const faqItemsLink = document.querySelectorAll(".faq-item-link");

faqItemsLink.forEach(item => {

   const fapItem = item.parentElement;
   const faqItemArrow = item.querySelector("i");
   const faqItemText = fapItem.querySelector("p");

   item.addEventListener('click', event => {
      console.log("event", event, item, fapItem);

      if ( faqItemText.classList.contains('open') ){ // to close
         item.classList.remove('bold');
         faqItemArrow.classList.remove('rotate');
         faqItemText.classList.remove('open');
      } else { // to open
         item.classList.add('bold');
         faqItemArrow.classList.add('rotate');
         faqItemText.classList.add('open');
      }
   })
})