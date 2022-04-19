
class Profile {
	constructor(name, username, type, phone, age, payment, userLocation, commonTravels) {
		this.name = name;
		this.username = username;
		this.type = type;
		this.phone = phone;
		this.age = age;
		this.payment = payment;
		this.userLocation = userLocation;
		this.commonTravels = commonTravels;
	}
}

class Travel {
	constructor(user, locationToTravel, typeOfPayment, price, time, driver, car) {
		this.user = user;
		this.locationToTravel = locationToTravel;
		this.typeOfPayment = typeOfPayment;
		this.price = price;
		this.time = time;
		this.driver = driver;
		this.car = car;
	}
}
