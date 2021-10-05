class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
        this.title = undefined;
    }

    get online() {
        return this._online;
    }

    set online(value) {
        if (this.title) {this.title.classList.remove('online')}
        if (value == true && this.title) {
            this.title.classList.add('online');
        }
        this._online = value;
    }

    render(id) {
        const main = document.getElementById(id);
        const article = document.createElement('article');
        const title = document.createElement('div');
        const info = document.createElement('div');
        const phone = document.createElement('span');
        const email = document.createElement('span');
        const infoBtn = document.createElement('button');

        infoBtn.addEventListener('click', (e) => {
            const info = e.target.parentNode.parentNode.getElementsByTagName('div')[1];
            if (info.style.display == 'block') {
                info.style.display = 'none';
            } else {
                info.style.display = 'block';
            }
        });

        infoBtn.textContent = '\u2139';
        title.textContent = `${this.firstName} ${this.lastName}`;
        phone.textContent = '\u260E' + ' ' + this.phone;
        email.textContent = '\u2709' + ' ' + this.email;
        
        title.className = 'title';
        info.className = 'info';

        info.style.display = 'none';

        title.appendChild(infoBtn)
        info.appendChild(phone);
        info.appendChild(email);
        article.appendChild(title);
        article.appendChild(info);
        main.appendChild(article);

        this.title = title;
        this.online = this.online;
    }
}


let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
  ];
  contacts.forEach(c => c.render('main'));
  
  // After 1 second, change the online status to true
  setTimeout(() => contacts[1].online = true, 2000);
//   setTimeout(() => contacts[2].online = false, 2000);
