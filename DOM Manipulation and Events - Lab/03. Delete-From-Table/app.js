function deleteByEmail() {
    const email = document.getElementsByName('email')[0].value;
    const emails = document.querySelectorAll('tbody tr');
    const result = document.getElementById('result');
    
    let deleted = false;
    for (row of emails) {
        if (row.children[1].textContent === email) {
            row.remove();
            deleted = true;
        }
    }

    if (deleted) {
        result.textContent = 'Deleted.';
    } else {
        result.textContent = 'Not found.'
    }
}