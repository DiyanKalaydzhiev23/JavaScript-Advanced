function attachGradientEvents() {
    const box = document.getElementById('gradient');
    const result = document.getElementById('result');
    box.addEventListener('mousemove', MouseMove);

    function MouseMove(event) {
        result.textContent = `${Math.floor((event.offsetX / 300) * 100)}%`;
    }
}