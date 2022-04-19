import Student from './explorer.js'

export default class Developer extends Student {

	constructor(name, username, mission, cicle) {
		super(name, username, mission);
		this.cicle = cicle;
	}

	getGeneralInfo() {
		let info = this.getName();
		return `${info}, Cicle: ${this.cicle}`;
	}
}
