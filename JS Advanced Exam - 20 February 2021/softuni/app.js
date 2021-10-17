function solve(){
   const createBtn = document.getElementsByTagName('button')[0];
   createBtn.addEventListener('click', create);

   function create(e) {
      e.preventDefault();

      const creatorName = document.getElementById('creator');
      const titleName = document.getElementById('title');
      const categoryName = document.getElementById('category');
      const contentName = document.getElementById('content');

      const section = document.querySelector('main section');
      const article = document.createElement('article');
      const title = document.createElement('h1');
      const category = document.createElement('p');
      const categoryStrong = document.createElement('strong');
      const creator = document.createElement('p');
      const creatorStrong = document.createElement('strong');
      const textHolder = document.createElement('p');
      const div = document.createElement('div');
      const deleteBtn = document.createElement('button');
      const archiveBtn = document.createElement('button');

      deleteBtn.className = 'btn delete';
      archiveBtn.className = 'btn archive';
      div.className = 'buttons';

      deleteBtn.addEventListener('click', deleteContent);
      archiveBtn.addEventListener('click', archive);

      title.textContent = titleName.value;
      category.textContent = 'Category:';
      categoryStrong.textContent = categoryName.value;
      creator.textContent = 'Creator:';
      creatorStrong.textContent = creatorName.value;
      textHolder.textContent = contentName.value;
      deleteBtn.textContent = 'Delete';
      archiveBtn.textContent = 'Archive';

      div.appendChild(deleteBtn);
      div.appendChild(archiveBtn);
      creator.appendChild(creatorStrong);
      category.appendChild(categoryStrong);
      article.appendChild(title);
      article.appendChild(category);
      article.appendChild(creator);
      article.appendChild(textHolder);
      article.appendChild(div);
      section.appendChild(article);
   }

   function deleteContent(e) {
      e.target.parentNode.parentNode.remove();
   }

   function archive(e) {
      const ol = document.getElementsByClassName('archive-section')[0].children[1];
      const title = e.target.parentNode.parentNode.querySelector('h1');
      const li = document.createElement('li');
      
      li.textContent = title.textContent;
      ol.appendChild(li);

      const sorted = Array.from(ol.children).sort((a, b) => a.textContent.localeCompare(b.textContent));
      sorted.forEach(l => ol.appendChild(l));
      deleteContent(e);
   }
}
