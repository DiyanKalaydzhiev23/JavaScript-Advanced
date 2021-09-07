function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const rows = document.querySelectorAll('tbody tr');

   function onClick() {
      const text = document.getElementById('searchField').value;

      for (let row of rows) {
         if (row.textContent.includes(text)) {
            row.classList.add('select');
         } else {
            row.removeAttribute('class');
         }
      }
   }
}