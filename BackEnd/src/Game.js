const BoardManager = require('./BoardManager');

class Game {
	constructor({ ip, code }) {
		this.p1 = ip;
		this.p2 = null;
		this.code = code;
		this.bm = new BoardManager();
	}

	join(ip) {
		if (this.p2 === null) {
			this.p2 = ip;
			return true;
		} else {
			return false;
		}
	}

	move(moveDesc) {
		return this.bm.move(moveDesc);
	}

	getCode() {
		return this.code;
	}
}

module.exports = Game;