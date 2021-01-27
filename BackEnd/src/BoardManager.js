class BoardManager {
	constructor() {
		this.board = this.defaultBoard();
		this.printBoard();
	}

	defaultBoard() {
		return new Array(
			undefined, "Bishop", "King", "Knight", undefined,
			undefined, "Pawn"  , "Pawn", "Pawn"  , undefined,
			null     , null    , null  , null    , null     ,
			null     , null    , null  , null    , null     ,
			null     , null    , null  , null    , null     ,
			undefined, "Pawn"  , "Pawn", "Pawn"  , undefined,
			undefined, "Knight", "King", "Bishop", undefined,
		);
	}

	move(moveDesc) {
		return true;
	}

	printBoard() {
		for (let i = 6; i >= 0; i--) {
			let row = "";
			for (let j = 0; j < 5; j++) {
				row += this.board[i*5 + j];
				row += " ";
			}
			console.log(row);
		}
	}
}

module.exports = BoardManager;