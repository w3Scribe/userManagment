import dotenv from "dotenv";
dotenv.config();

export default Object.freeze({
	port: process.env.PORT || 5000,
	env: process.env.NODE_ENV || "development",
	dbUri: process.env.MONGODB_URI,
});
