function colorize() {
    const rows = document.querySelectorAll('table tr');
    
    for (i = 1; i < rows.length; i += 2) {
        rows[i].style.backgroundColor = 'teal';
    }
}
