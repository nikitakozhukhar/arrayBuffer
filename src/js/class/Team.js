import Bowman from "./Bowman";
import Swordsman from "./Swordsman";

export default class Team {
	constructor() {
        this.members = new Set();
    }
	
	add(character) {
		if (this.members.has(character)) {
			throw new Error('Данный персонаж уже добавлен в команду')
		}
		this.members.add(character)
	}

	addAll(...characters) {
		for (let char of characters) {
			this.members.add(char)
		}
	}

	toArray() {
		const arrMembers = this.members.entries()
		return arrMembers
	}
	
}

