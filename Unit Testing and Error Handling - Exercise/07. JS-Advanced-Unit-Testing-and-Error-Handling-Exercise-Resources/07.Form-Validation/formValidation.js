function validate() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const email = document.getElementById('email');
    const company = document.getElementById('company');
    const companyInfo = document.getElementById('companyInfo');
    const companyNumber = document.getElementById('companyNumber');
    const submitBtn = document.getElementById('submit');
    const valid = document.getElementById('valid');
    let failed = false;

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        handleError([username, password, confirmPassword, email, companyNumber], 'clean');
        
        if(!username.value.match(/[A-Za-z0-9]+/gm) || username.value.length < 3 || username.value.length > 20) {
            handleError([username], 'error');                     
        };
        if (!password.value.match(/[A-Za-z0-9_]+/gm) || password.value.length < 5 || password.value.length > 15) {
            handleError([password], 'error');  
        }
        if (password.value != confirmPassword.value || confirmPassword.value === '') {
            handleError([password, confirmPassword], 'error');  
        }
        if (!email.value.match(/[a-z]+@[a-z]+\.[a-z]+/gm)) {
            handleError([email], 'error');  
        }
        if (company.checked && (companyNumber.value < 1000 || companyNumber.value > 9999)) {
            handleError([companyNumber], 'error');  
        }
    });

    company.addEventListener('change', () => {
        if (company.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    });

    function handleError(elements, action) {
        if (action === 'error') {
            elements.forEach(e => this.style.borderColor = 'red');
        }
    }
}
