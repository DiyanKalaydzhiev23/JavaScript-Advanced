window.addEventListener('load', solution);

function solution() {
    const fullName = document.getElementById('fname');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const address = document.getElementById('address');
    const code = document.getElementById('code');
    const editBtn = document.getElementById('editBTN');
    const continueBtn = document.getElementById('continueBTN');
    const infoPreview = document.getElementById('infoPreview');
    const submitBtn = document.getElementById('submitBTN');

    submitBtn.addEventListener('click', () => {

        if (fullName.value.length === 0 || email.value.length === 0) {
            return;
        }

        const data = [fullName.value, email.value, phone.value, address.value, code.value];
        const fullNameHolder = document.createElement('li');
        const emailHolder = document.createElement('li');
        const phoneHolder = document.createElement('li');
        const addressHolder = document.createElement('li');
        const codeHolder = document.createElement('li');

        fullNameHolder.textContent = `Full Name: ${fullName.value}`; 
        emailHolder.textContent = `Email: ${email.value}`; 
        phoneHolder.textContent = `Phone Number: ${phone.value}`; 
        addressHolder.textContent = `Address: ${address.value}`; 
        codeHolder.textContent = `Postal Code: ${code.value}`;

        infoPreview.appendChild(fullNameHolder);
        infoPreview.appendChild(emailHolder);
        infoPreview.appendChild(phoneHolder);
        infoPreview.appendChild(addressHolder);
        infoPreview.appendChild(codeHolder);
        
        fullName.value = '';
        email.value = '';
        phone.value = '';
        address.value = '';
        code.value = '';

        submitBtn.disabled = true;
        editBtn.disabled = false;
        continueBtn.disabled = false;

        editBtn.addEventListener('click', () => {
            fullName.value = data[0];
            email.value = data[1];
            phone.value = data[2];
            address.value = data[3];
            code.value = data[4];

            Array.from(infoPreview.children).forEach(c => c.remove());

            submitBtn.disabled = false;
            editBtn.disabled = true;
            continueBtn.disabled = true;
        });

        continueBtn.addEventListener('click', () => {
            const block = document.getElementById('block');
            const goodbyeMsg = document.createElement('h3');

            Array.from(block.children).forEach(c => c.remove());

            goodbyeMsg.textContent = 'Thank you for your reservation!';
            block.appendChild(goodbyeMsg);
        });
    });
}