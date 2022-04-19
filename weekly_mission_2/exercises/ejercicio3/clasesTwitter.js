
class User {
	
	constructor(user, username, age, tweets, following, followers, topics) {
		this.user = user;
		this.username = username;
		this.age = age;
		this.tweets = age;
		this.following = following;
		this.topics = topics;
	}
}


class TrendingTopic {
	constructor(title, tweets,hashtag) {
		this.title = title;
		this.tweets = tweets;
		this.date = new Date();
		this.hashtag = hashtag;
	}
}

class Hashtag {
	constructor(title, tweets, locations, people, photos, videos) {
		this.title = title;
		this.tweets = tweets;
		this.locations = locations;
		this.people = people;
		this.people = photos;
		this.videos = videos;
	}	
}
