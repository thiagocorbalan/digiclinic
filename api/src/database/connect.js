const mongoose = require("mongoose");

const dbUSER = process.env.MONGODB_USER;
const dbpPASS = process.env.MONGODB_PASS;

const connectToDatabase = async () => {
	try {
		const mongoURL = `mongodb+srv://${dbUSER}:${dbpPASS}@digiclinic.jy5g6re.mongodb.net/database?retryWrites=true&w=majority&appName=DigiClinic`;
		await mongoose.connect(mongoURL, { serverApi: { version: '1', strict: true, deprecationErrors: true } });
		await mongoose.connection.db.admin().command({ ping: 1 });

		console.log("Database connected");
	} catch(error) {
		console.log("Ocorreu um erro:", error)
	}
}

module.exports = connectToDatabase;