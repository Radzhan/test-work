import axios from "axios";
import * as express from "express";

const testRouter = express.Router();

testRouter.get("/", async (req, res, next) => {
	try {
		const url = 'https://dpg.gg/test/calendar.json'

		const response = await axios.get(url);

		res.send(response.data)
	} catch (e) {
		return next(e);
	}
});

export default testRouter;
