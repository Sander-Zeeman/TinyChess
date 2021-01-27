const PORT = process.env.PORT || 3000;
const GameManager = require('./GameManager');
const cors = require('cors');
const express = require('express');

const app = express();
const gm = new GameManager();

app.use(express.json());
app.use(cors());

app.post('/new-game', (req, res) => {
	res.send(gm.newGame(req.body));
});

app.post('/join', (req, res) => {
	res.send(gm.join(req.body));
});

app.post('/move', (req, res) => {
	res.send(gm.move(req.body));
});

app.listen(PORT, () => {
	console.log(`Our app is running on port ${ PORT }`);
});