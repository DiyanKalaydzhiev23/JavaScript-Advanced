function lockedProfile() {
    const showButtons = Array.from(document.querySelectorAll('div button'));
    showButtons.forEach(btn => btn.addEventListener('click', showMore));

    function showMore(event) {
        const parent = event.target.parentNode;
        const locked = parent.getElementsByTagName('input')[0];
        const moreInfo = parent.getElementsByTagName('div')[0];
        
        if (locked.checked == false && event.target.textContent === 'Show more') {
            moreInfo.style.display = 'block';
            event.target.textContent = 'Hide it';
        } else if (locked.checked == false && event.target.textContent === 'Hide it') {
            moreInfo.style.display = 'none';
            event.target.textContent = 'Show more';
        }
    }
}