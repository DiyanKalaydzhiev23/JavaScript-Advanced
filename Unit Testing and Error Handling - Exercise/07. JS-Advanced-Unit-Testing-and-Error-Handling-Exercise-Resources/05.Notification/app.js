function notify(message) {
  let notif = document.getElementById('notification');
  notif.textContent = message;
  notif.style.display = 'block';
  notif.addEventListener('click', (e) => {
    e.target.style.display = 'none';
  });
}
