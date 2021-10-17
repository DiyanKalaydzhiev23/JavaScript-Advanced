class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`;
        }
        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        } else if (username === this.creator) {
            throw new Error("You can't like your own story!");
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (this._likes.includes(username) === false) {
            throw new Error("You can't dislike this story!");
        }
        this._likes = this._likes.filter(u => u != username);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        let commentWithId;
        this._comments.forEach(c => {
            if (c.Id === id) {
                commentWithId = c.Id;
            }
        });

        if (id === undefined || commentWithId === undefined) {
            const newId = this._comments.length + 1;
            this._comments.push({Id: newId, Username: username, Content: content, Replies: []});
            return `${username} commented on ${this.title}`;
        } else if (commentWithId) {
            const newId = Number(`${commentWithId}.${this._comments[commentWithId-1].Replies.length + 1}`);
            this._comments[commentWithId-1].Replies.push({Id: newId, Username: username, Content: content});
            return 'You replied successfully';
        }
    }

    toString(sortingType) {
        const result = [
            `Title: ${this.title}`,
            `Creator: ${this.creator}`,
            `Likes: ${this._likes.length}`,
            `Comments:` 
        ];

        if (sortingType === 'asc') {
            const sortedComments = this._comments.sort((a, b) => a.Id - b.Id);
            sortedComments.forEach(c => {
                result.push(`-- ${c.Id}. ${c.Username}: ${c.Content}`);
                if (c.Replies.length > 0) {
                    let sortedReplies = c.Replies.sort((a, b) => a.Id - b.Id);
                    sortedReplies.forEach(r => result.push(`--- ${r.Id}. ${r.Username}: ${r.Content}`));
                }
            });
        } else if (sortingType === 'desc') {
            const sortedComments = this._comments.sort((a, b) => b.Id - a.Id);
            sortedComments.forEach(c => {
                result.push(`-- ${c.Id}. ${c.Username}: ${c.Content}`);
                if (c.Replies.length > 0) {
                    let sortedReplies = c.Replies.sort((a, b) => b.Id - a.Id);
                    sortedReplies.forEach(r => result.push(`--- ${r.Id}. ${r.Username}: ${r.Content}`));
                }
            });
        } else if (sortingType === 'username') {
            const sortedComments = this._comments.sort((a, b) => a.Username.localeCompare(b.Username));
            sortedComments.forEach(c => {
                result.push(`-- ${c.Id}. ${c.Username}: ${c.Content}`);
                if (c.Replies.length > 0) {
                    let sortedReplies = c.Replies.sort((a, b) => a.Username.localeCompare(b.Username));
                    sortedReplies.forEach(r => result.push(`--- ${r.Id}. ${r.Username}: ${r.Content}`));
                }
            });
        }

        return result.join('\n');
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
