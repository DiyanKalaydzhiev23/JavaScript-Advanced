function solve() {
   const products = [];
   let totalPrice = 0;
   const result = document.querySelector('textarea');
   const checkoutButton = document.querySelectorAll('.checkout')[0];
   checkoutButton.addEventListener('click', checkout);
   const addButtons = Array.from(document.getElementsByClassName('add-product'));
   addButtons.forEach(b => b.addEventListener('click', addProducts));


   function addProducts(event) {
      const parent = event.target.parentNode.parentNode;
      const product = parent.querySelector('.product-title').textContent;
      const price = Number(parent.querySelector('.product-line-price').textContent);
      totalPrice += price;
      if (!products.includes(product)) { products.push(product) }
      result.value += `Added ${product} for ${price.toFixed(2)} to the cart.\n`;
   }

   function checkout(event) {
      result.value += `You bought ${products.join(', ')} for ${totalPrice.toFixed(2)}.`
      addButtons.forEach(b => b.disabled = true);
      checkoutButton.disabled = true;
   }
}