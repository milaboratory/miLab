(function() {
  let accordionBlocks = document.querySelectorAll('.publications__list-item-inner');
  for (let i = 0; i < accordionBlocks.length; i++) {
    accordionBlocks[i].addEventListener('click', function() {
        this.classList.toggle('rotate');
        let accordionContent = this.nextElementSibling;

        if (accordionContent.style.maxHeight) {
            accordionContent.style.maxHeight = null;
        }
          else {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        }
    });
  }
})();

