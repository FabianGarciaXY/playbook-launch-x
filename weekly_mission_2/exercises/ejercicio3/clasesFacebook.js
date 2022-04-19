
class User {

	constructor(name, username, age, friends, photos, videos, posts, shares, reactions, groups) {
		this.name = name
		this.username = username
		this.age = age;
		this.friends = friends;
		this.photos = photos;
		this.videos = videos;
		this.posts = posts;
		this.shares = shares;
		this.reactions = reactions;
		this.groups = groups;
	}
}

class Biography {
	constructor(name, username, description, image, phrase, people) {
		this.name = name;
		this.username = username;
		this.description = description;
		this.image = image;
		this.phrase = phrase;
		this.people = people;
	}
}

class Post {
	constructor(title, author, image, reactions, shares) {
		this.title = title;
		this.author = author;
		this.datetime = new Date;
		this.image = image;
		this.reactions = reactions;
		this.shares = shares;
	}
}
