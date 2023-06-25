const path = require("path");
const express = require("express");
const app = express();

const port = process.env.PORT || 3001;

app.use(express.static(__dirname + "/dist"));

// express will serve up index.html if it doesn't recognize the route

require("http")
	.Server(app)
	.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.static(path.resolve(__dirname, "dist")));
app.use(express.json());
app.get("*", function (req, res) {
	console.log(111);
	res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});
