function sortNames(names) {
    names.sort((a, b) => a.localeCompare(b));

    for (i = 1; i <= names.length; i++) {
        console.log(`${i}.${names[i-1]}`);
    }
}

sortNames(["John", "Bob", "Christina", "Ema"]);
