function create(words) {
   const content = document.getElementById('content');
   const divTags = [];

   words = Array.from(words);
   words.forEach(el => divTags.push(document.createElement('div')));
   
   for (i = 0; i < words.length; i++) {
      let pElement = document.createElement('p');
      pElement.textContent = words[i];
      pElement.style.display = 'none';
      divTags[i].appendChild(pElement);
   }

   divTags.forEach(el => el.addEventListener('click', onClick));
   divTags.forEach(el => content.appendChild(el));
   
   function onClick(event) {
      event.target.children[0].style.display = '';
   }
}