const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
	if (req.url === '/home') {
        res.writeHead(200, { "content-type": "text/html"});
        res.end("<h1>Hello Home page</h1>");
    }

	if (req.url === '/users') {
		const users = [
			{
				name: 'Jhon Doe',
				email: 'jhon@doe.com'
			},
			{
				name: 'Jane Doe',
				email: 'jane@doe.com'
			},
		];
		res.writeHead(200, { "content-type": "application/json"});
		res.end(JSON.stringify(users));
	}
})

server.listen(port, () => console.log(`Server is runing in port ${port}`));