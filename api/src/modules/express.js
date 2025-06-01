const PORT = process.env.PORT;
const express = require("express");

const app = express();

app.get("/home", (req, res) => {
	res.contentType("text/html");
	res.status(200).send("<h1>Hello World</h1>");
});

app.get("/users", (req, res) => {
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
	res.contentType("application/json");
	res.send(users);
})

app.listen(PORT, () => console.log("Server express running in port ", PORT))