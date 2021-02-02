const express = require('express');
const http = require('http');
const ws = require('ws');
const url = require('url');
const GameManager = require('./GameManager');

const PORT = process.env.PORT || 3000;
const gm = new GameManager();
const server = http.createServer( express() );

server.on('upgrade', (req, socket, head) => {
	const pathname = url.parse(request.url).pathname;
	if (pathname === '/new-game') {
		gm.newGame(req, socket, head);
	} else if (gm.checkCode(pathname)) {
		gm.join(pathname, req, socket, head)
	} else {

	}
});
