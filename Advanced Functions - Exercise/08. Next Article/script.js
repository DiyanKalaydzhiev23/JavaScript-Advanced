function getArticleGenerator(articles) {
    const divEl = document.getElementById('content');
    return function() {
        if (articles.length > 0) {
            const article = document.createElement('article');
            article.textContent = articles.shift();
            divEl.appendChild(article);
        }
    }
}
