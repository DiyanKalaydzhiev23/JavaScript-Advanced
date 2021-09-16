function encodeAndDecodeMessages() {
    const encodeMessage = document.getElementsByTagName('textarea')[0];
    const decodeMessage = document.getElementsByTagName('textarea')[1];
    const encodeButton = document.getElementsByTagName('button')[0];
    const decodeButton = document.getElementsByTagName('button')[1];

    encodeButton.addEventListener('click', encode);
    decodeButton.addEventListener('click', decode);

    function encode(event) {
        const result = [];
        for (let ch of encodeMessage.value) {
            result.push(String.fromCharCode(ch.charCodeAt(0) + 1));
        }
        decodeMessage.value = result.join('');
        encodeMessage.value = '';
    }

    function decode(event) {
        const result = [];
        for (let ch of decodeMessage.value) {
            result.push(String.fromCharCode(ch.charCodeAt(0) - 1));
        }
        decodeMessage.value = result.join('');
    }
}