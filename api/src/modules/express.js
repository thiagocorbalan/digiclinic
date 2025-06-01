const PORT = process.env.PORT;
const express = require("express");
const UserModel = require("./../models/user.model");

const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
	try {
		const users = await UserModel.find({});

		res.status(200).send(users);
	} catch(error) {
		res.status(500).send(error.message);
	}
});


app.get("/users/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const users = await UserModel.findById(id);

		res.status(200).send(users);
	} catch(error) {
		res.status(500).send(error.message);
	}
});

app.post("/users", async (req, res) => {
	try {
		const user = await UserModel.create(req.body);
		res.status(201).json(user);
	} catch(error) {
		res.status(500).send(error.message);
	}
});

app.patch("/users/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const user = await UserModel.findByIdAndUpdate(id, req.body, {
			new: true
		});
		res.status(201).json(user);
	} catch(error) {
		res.status(500).send(error.message);
	}
});

app.delete("/users/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const user = await UserModel.findByIdAndDelete(id);
		res.status(201).json(user);
	} catch(error) {
		res.status(500).send(error.message);
	}
});

app.listen(PORT, () => console.log("Server express running in port ", PORT))