function extract(content) {
    const text = document.getElementById(content).textContent;
    const matcher = /\((.+?)\)/gm;
    const result = [];
    let match = matcher.exec(text);

    while (match != null) {
        result.push(match[1]);
        match = matcher.exec(text);
    }

    return result.join('; ');
}