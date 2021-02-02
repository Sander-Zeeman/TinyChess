class GameManager {
	constructor() {
		this.games = new Map();
	}

	generateCode() {
		const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
		let code;
		do {
			code = "";
			for (let i = 0; i < 5; i++) {
				code += chars[Math.floor(chars.length * Math.random())];
			}
		} while (this.games.get(code) !== undefined);
		return code;
	}

	checkCode(code) {
		if (!(/[A-Z][A-Z][A-Z][A-Z][A-Z]/g.test(code) && code.length === 5)) {
			return false;
		}
		return this.games.get(code) !== undefined;
	}

	newGame() {}

	join(code) {}
}

module.exports = GameManager;