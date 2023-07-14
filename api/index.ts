import cors = require("cors");
import express = require("express");
import testRouter from './router/test';

const app = express();
const port = 8000;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use("/test", testRouter);

const run = async () => {

	app.listen(port, () => {
		console.log('We are live on ' + port);
	});
};

run().catch(console.error);
