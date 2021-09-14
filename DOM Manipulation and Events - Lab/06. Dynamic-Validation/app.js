function validate() {
    document.getElementById('email').addEventListener('change', checkEmail);

    function checkEmail(ev) {
        if (/[a-z]+@[a-z]+\.[a-z]+/gm.test(ev.target.value)) {
            ev.target.className = '';
        } else {
            ev.target.className = 'error';
        }
    }
}
