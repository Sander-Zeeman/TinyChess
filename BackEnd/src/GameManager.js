const Game = require('./Game');

class GameManager {
	constructor() {
		this.games = [];
	}

	findGameIndex(code) {
		return this.games.findIndex(game => game.getCode() === code);
	}

	generateCode() {
		const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
		let code;
		do {
			code = "";
			for (let i = 0; i < 5; i++) {
				code += chars[Math.floor(chars.length * Math.random())];
			}
		} while (this.findGameIndex(code) !== -1)
		return code;
	}

	newGame(data) {
		if (!data.ip) {
			return "No valid IP address was supplied."
		}
		const gameData = {
			ip: data.ip,
			code: this.generateCode()
		}
		this.games.push(new Game(gameData));
		return `Game successfully started with code: ${gameData.code}`;
	}

	join(data) {
		if (!data.code) {
			return "No code was supplied."
		}
		if (!data.ip) {
			return "No valid IP address was supplied."
		}
		const gameIndex = this.findGameIndex(data.code);
		if (gameIndex === -1) {
			return `No game exists with code: ${data.code}`;
		} else {
			if (this.games[gameIndex].join(data.ip)) {
				return `Successfully joined game with code: ${data.code}`;
			} else {
				return `Game has already started.`;
			}
		}
	}

	move(data) {
		if (!data.code) {
			return "No code was supplied."
		}
		if (!data.start || !data.end) {
			return "Invalid move.";
		}
		const gameIndex = this.findGameIndex(data.code);
		if (gameIndex === -1) {
			return `No game exists with code: ${data.code}`;
		}
		if (this.games[gameIndex].move({
			start: data.start,
			end: data.end
		})) {
			return "Legal move.";
		} else {
			return "Illegal move."
		}
	}
}

module.exports = GameManager;