function validate() {
    const emailBox = document.getElementById('email');
    emailBox.addEventListener('change', () => {
        if (!emailBox.value.match(/[a-z]+@[a-z]+\.[a-z]+/gm)) {
            emailBox.className = 'error';
        } else {
            emailBox.className = '';
        }
    });
}